import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import bundle from '/static/html/components/component_modules/waves/module/waves-bundle.mjs'
let object = {}
let Class = class Waves {
    constructor() {
        this.getPrice = this.getPrice.bind(this)
        this.buy = this.buy.bind(this)
        this.sell = this.sell.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('typeScript-end-dex', this.end)
    }
    buy(first, second){

        while(verify){
            amount = wavesEuro['bids'][i]['amount']


            // console.log(wavesUsd['bids'][i]['amount']/wvsAmount)
            // console.assert(false, wavesUsd['bids'][i]['price']/wvsPrice)
            if(amount < 10){
                count = count++
            }else{

                amount = wavesEuro['bids'][i + count]['amount']/wvsAmount
                relation['s']['ew'] = ( relation['e'] /  wavesEuro['bids'][i][0]).toFixed(2)
                amountLast =  parseInt(relation['s']['ew'] * wavesEuro['bids'][i + count][0], 10).toFixed(2)
                transaction[0] = {}
                transaction[0]['amount'] = amountLast
                transaction[0]['course'] = wavesEuro['bids'][i + count][0]
                price = wavesEuro['bids'][i + count][0]
                verify = false

            }
        }

        return ''
    }
    sell(console = true,property='a',color = 'black', substrat={_:'button'},relation='transfer'  ){
        return ''
    }
    getPrice(console = true,property='a',color = 'black', substrat={_:'button'},relation='faucet'  ){
        return ''
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