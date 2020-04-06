import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import Module from '/static/html/components/component_modules/graph/module/module.mjs'
import loader from '/static/html/components/component_modules/loader/loader.mjs'
let object = {}
let Class = class Graph {
    constructor(self) {
        this.drawChart = this.drawChart.bind(this)
        this.getGraph = this.getGraph.bind(this)
        this.processRawData = this.processRawData.bind(this)
        this.generateDataArrays = this.generateDataArrays.bind(this)
        this.addEventListener = this.addEventListener.bind(this)
        this.clearPreviousGame = this.clearPreviousGame.bind(this)
        this.addDataPoint = this.addDataPoint.bind(this)
        
        document.addEventListener('typeScript-end-graph', this.end)
    }
    drawChart(view = true,property='a',color = 'black', substrate={_:'button'},relation='transfer' ){
        return new Promise(async (resolve, reject) => {
            let module = await Module()
            substrate.this.shadowRoot.querySelector('#container').style.display = 'none'
            substrate.this.shadowRoot.querySelector('.chart-buttons-container').style.display = 'none'
            substrate.this.shadowRoot.querySelector('#loader-section').style.display = 'flex'
            module.asset = module.assets[Math.floor(Math.random()* module.assets.length)]
            let speedInput =  substrate.this.shadowRoot.querySelector('#data-speed-input').value
            module.dataFlowIntervalTimer = Math.round((10/speedInput)*1000)
            let rawData = await this.getGraph(module)
            const data = await this.processRawData(rawData);
            await this.generateDataArrays(data, module);
            let charts =  await loader('https://code.highcharts.com/stock/highstock.js','Highcharts' )
            let container =  substrate.this.shadowRoot.querySelector('#container')
            module.chart = charts.stockChart(container, {
                        rangeSelector: {
                            buttons: [
                                {type: 'month',count: 1,text: '1m'},
                                {type: 'month',count: 3,text: '3m'},
                                {type: 'month',count: 6,text: '6m'},
                                {type: 'year',count: 1,text: '1y'},
                                {type: 'all',text: 'All'}],
                            selected: window.innerWidth>768 ? 3 : 2,
                            inputEnabled: false
                        },
                        title: {
                            text: module.asset,
                            margin: 8
                        },
                        xAxis: {
                            crosshair: true
                        },
                        yAxis: {
                            crosshair: true
                        },
                        series: [{
                            type: 'candlestick',
                            name: module.isAssetHidden ? 'Series 1' : module.asset,
                            data: module.displayedDataPoints,
                            dataGrouping: {
                                units: [
                                    ['day', [1] ]
                                ]
                            }
                        }]
                    });
    
    
            let highchartsTitle = substrate.this.shadowRoot.querySelector('.highcharts-title')
            module.isAssetHidden ? highchartsTitle.style.opacity = '0' : highchartsTitle.style.opacity = '1';
          
            let loaderSection = substrate.this.shadowRoot.querySelector('#loader-section')
            let chartButtonsContainerLeft = substrate.this.shadowRoot.querySelector('#chart-buttons-container-left')
            let chartButtonsContainerRight = substrate.this.shadowRoot.querySelector('#chart-buttons-container-right')
           // console.assert(false,chartButtonsContainer )
            loaderSection.style.display ='none';
            container.style.display ='flex';
            chartButtonsContainerLeft.style.display ='flex';
            chartButtonsContainerRight.style.display ='flex';
            resolve(true)
        })
    }
    getGraph(module){
        return new Promise(async (resolve, reject) => {
        let result =  await fetch(`${module.proxyURL}https://www.quandl.com/api/v3/datasets/WIKI/${module.asset}/data.json?api_key=${module.QUANDL_API_KEY}`)
            result = await result.json()
            resolve(result)
        })
    }
    processRawData(rawData) {
        return new Promise(async (resolve, reject) => {
            rawData = rawData.dataset_data.data;
            let data = [];
            for(let i=0; i<rawData.length; i++) {
                let dataRow = [];
                dataRow.push(Date.parse(rawData[i][0]));
                for(let j=1; j<5; j++) {
                    dataRow.push(rawData[i][j]);
                }
                data.push(dataRow);
            }
            data.reverse(); // Ascending Order for Dates (raw data comes in descending order)
            resolve(data);
            
        })
    }
    generateDataArrays(data, module) {
        return new Promise(async (resolve, reject) => {
            const maxDisplayedIndex = data.length > 300 ? data.length-300 : 0; // Leave at least 300 hidden data points (or all points if less than 300 points available)
            const randomDisplayedIndex = Math.floor(Math.random()*maxDisplayedIndex);
            module.displayedDataPoints = [];
            module.remainingDataPoints = [];
            for(let i=0; i<randomDisplayedIndex; i++) module.displayedDataPoints.push(data[i]);
            for(let i=randomDisplayedIndex; i<data.length; i++) module.remainingDataPoints.push(data[i]);
            resolve(true)
        })
    }
    addEventListener(view = true,property='a',color = 'black', substrate={_:'button'},relation='transfer' ){
        return new Promise(async (resolve, reject) => {
        let module = await Module()
        let startEndGame = substrate.this.shadowRoot.querySelector('#start-end-game')
        let showHideAsset = substrate.this.shadowRoot.querySelector('#show-hide-asset')
        let playPause = substrate.this.shadowRoot.querySelector('#play-pause')
        let refreshBtn = substrate.this.shadowRoot.querySelector('#refresh-btn')
        let dataSpeedInput = substrate.this.shadowRoot.querySelector('#data-speed-input')
    
    
        let bettingAmount = substrate.this.shadowRoot.querySelector('#betting-amount')
        let expiry = substrate.this.shadowRoot.querySelector('#expiry')
        let buySellButtons = substrate.this.shadowRoot.querySelector('#buy-sell-buttons')
    
        let gameControls = substrate.this.shadowRoot.querySelector('#game-controls')
    
        startEndGame.addEventListener('click',async ()=>{
            if(module.isGameInProgress) { // end current game
                startEndGame.classList.remove("btn-danger")
                startEndGame.classList.add("btn-success")
                refreshBtn.disabled = false
                if(!module.isGamePaused) {
                    playPause.click()
                }
                gameControls.style.opacity = '0.5'
                module.isGameInProgress = !module.isGameInProgress;
            }
            else { // initiate game
                if(module.remainingDataPoints.length>0) {
                    if(module.gameHistory.history.length>0) { this.clearPreviousGame(module); }
                    startEndGame.classList.remove("btn-success")
                    startEndGame.classList.add("btn-danger")
                    refreshBtn.disabled = true
          
                    if(module.isGamePaused) { playPause.click() }
                    gameControls.style.opacity = '1'
                    module.isGameInProgress = !module.isGameInProgress;
                }
                else {
                    refreshBtn.classList.add("tada")
                    setTimeout(function(){
                        refreshBtn.classList.remove("tada")
                        }, 1000);
                }
            }
        })
            dataSpeedInput.addEventListener('input', async (e)=>{
                module.dataFlowIntervalTimer = Math.round((10/e.currentTarget.value)*1000);
                    if(!module.isGamePaused) {
                        clearInterval(module.dataFlowIntervalFunction);
                        module.dataFlowIntervalFunction = setInterval(() => addDataPoint(), dataFlowIntervalTimer);
                        }
                    });
            })
        // $("#data-speed-input").on("input", function() {
        //     $(this).attr("style",`--val: ${$(this).val()};`);
        //     dataFlowIntervalTimer = Math.round((10/$(this).val())*1000);
        //     if(!isGamePaused) {
        //         clearInterval(dataFlowIntervalFunction);
        //         dataFlowIntervalFunction = setInterval(() => addDataPoint(), dataFlowIntervalTimer);
        //         }
        //     });
        // })
    }
    clearPreviousGame(module){
        return new Promise(async (resolve, reject) => {
            module.gameHistory = {
                cashBalance: initialCashBalance,
                openPositions: 0,
                equity: initialCashBalance,
                totalBetsMatured: 0,
                totalBetsWon: 0,
                totalAmountWon: 0,
                totalAmountLost: 0,
                totalProfit: 0,
                history: []
            };
            $("#cash-balance").text(numberToText(gameHistory.cashBalance));
            $("#open-positions").text(numberToText(gameHistory.openPositions));
            $("#equity").text(numberToText(gameHistory.equity));
            $("#win-rate").text(gameHistory.totalBetsWon + "/" + gameHistory.totalBetsMatured);
            $("#average-profit").text("0");
            $("#average-loss").text("0")
            $("#total-profit").text("$0");
            $("#betting-amount").attr("max", gameHistory.cashBalance);
            $("#betting-amount").attr("value", 1000);
            $("#betting-amount").val(1000);
            $("#expiry").attr("max", 100);
            $("#expiry").attr("value", 10);
            $("#expiry").val(10);
            $("#game-history table tbody").empty();
            for(let i=1; i<=4; i++) {
                $("#game-history table tbody").append(`<tr>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>`);
            }
    
        })
    }
    addDataPoint() {
        if(remainingDataPoints.length>0) {
            chart.series[0].addPoint(remainingDataPoints.shift()); // addPoint(options [,redraw] [,shift])
            if(remainingDataPoints.length<+$("#expiry").attr("max")) {
                $("#expiry").attr("max", remainingDataPoints.length);
                $("#expiry").blur();
            }
            checkForExpiredOpenPositions();
        }
        else { // Game Over...
            if(isGameInProgress){ $("#start-end-game").click(); }
            else { $("#play-pause").click(); }
            $("#play-pause").prop("disabled", true);
        }
    }
    end(event){
        queue(event['detail']['console'], '~end',event['detail']['color'],event['detail']['substrate'],event['detail']['relation']).then((data)=>{

            colorlog(true, 'stat','stat',data, 'статистика')

        })
    }
    get self() {
        return object
    }
}


export default Class