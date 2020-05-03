import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import bundle from '/static/html/components/component_modules/bundle/waves/waves.mjs'
let Class = class Waves {
    constructor(self) {
        this.bank = this.bank.bind(this)
        this.balance = this.balance.bind(this)
        this.wallet = this.wallet.bind(this)
        this.faucet = this.faucet.bind(this)
        this.transfer = this.transfer.bind(this)
        this.nft = this.nft.bind(this)
        this.order = this.order.bind(this)
        this.getOrders = this.getOrders.bind(this)
        this.getNft = this.getNft.bind(this)
        this.denormalize = this.denormalize.bind(this)
        this.details = this.details.bind(this)
        this.waitForTx = this.waitForTx.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('typeScript-end', this.end)
    }
    order(view = true,property='',color = 'black', substrate={_:'order'},relation='order'  ){
        return new Promise(async (resolve, reject)=>{
            let order = {}
            let request = {
                method: 'POST',
                body:substrate,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
                order = await fetch(`https://matcher.testnet.wavesnodes.com/matcher/orderbook`,request)
                resolve(await order.json())
        })
    }
    getOrders(view = true,property='',color = 'black', substrate={_:'order'},relation='order'  ){
        return new Promise(async (resolve, reject)=>{
            if(relation === 't'){
                let order = {}
                try{
                    order = await fetch(`https://matcher-testnet.wavesnodes.com/matcher/orderbook/HrMWJVXDkjpzkMA3LnzurfmXMtRTtip4uS2236NvW6AR?activeOnly=true`)
                    order = await order.text()
                }catch (e) {
                    order = e
                }
            
                console.assert(false, order)
                resolve(order)
            }
       
        })
    }
    denormalize(price, priceAssetDecimals, amountAssetDecimals){
        let wvsPrice = 10 ** (priceAssetDecimals - amountAssetDecimals + 8)
        return price/wvsPrice
    }
    getNft(address='', limit = 1, after = undefined){
        return new Promise(async (resolve, reject)=>{
            let balance = {}
            if(after === undefined){
                balance = await fetch(`https://testnodes.wavesnodes.com/assets/nft/${address}/limit/${limit}`)
            }else{
                balance = await fetch(`https://testnodes.wavesnodes.com/assets/nft/${address}/limit/${limit}?after=${after}`)
            }
            resolve(await balance.json())
        })
    }
    details(assetId){
        return new Promise(async (resolve, reject)=>{
            let balance = await fetch(`https://nodes.wavesnodes.com/assets/details/${assetId}`)
            resolve(await balance.json())
        })
    }
    balance(id){
        return new Promise(async (resolve, reject)=>{
         let balance = await fetch(`https://testnodes.wavesnodes.com/addresses/balance/${id}`)
            resolve(await balance.json())
        })
    }
    nft(view = true,property='a',color = 'black', substrate={_:'button'},relation='transfer'  ){
        return queue(view, property,color,substrate,relation)
    }
    transfer(console = true,property='a',color = 'black', substrate={_:'button'},relation='transfer'  ){
        return queue(console, property,color,substrate,relation)
    }
    faucet(console = true,property='a',color = 'black', substrate={_:'button'},relation='faucet'  ){
        return queue(console, property,color,substrate,relation)
    }
    bank(console = true,property='a',color = 'black', substrate={_:'button'},relation='bank'  ){
        return queue(console, property,color,substrate,relation)
    }
    wallet(console = true,property='a',color = 'black', substrate={_:'player'},relation='wallet'  ){
        return queue(console, property,color,substrate,relation)
    }
    waitForTx(id, node){
        return  new Promise(async (resolve, reject) => {
            resolve(bundle['default']['transactions']['waitForTx'](id, node))
        })
    }
    end(event){
        queue(event['detail']['console'], '~end',event['detail']['color'],event['detail']['substrate'],event['detail']['relation']).then((data)=>{

            colorlog(true, 'stat','stat',data, 'статистика')

        })
    }
    get self() {
        return bundle['default']
    }
}


export default Class