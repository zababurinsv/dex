import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
let object = {}
object['amount'] = 10 ** 8;
object['price'] = 10 ** 6;
object['fee'] = 0.003;

let Class = class Waves {
    constructor() {
        this.fix = this.fix.bind(this)
        this.buy = this.buy.bind(this)
        this.sell = this.sell.bind(this)
        this.denormalize = this.denormalize.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('typeScript-end-dex', this.end)
    }
    denormalize(price, priceAssetDecimals, amountAssetDecimals){
        let wvsPrice = 10 ** (priceAssetDecimals - amountAssetDecimals + 8)
        return price/wvsPrice
    }
    buy(pair,amount, obj,name){
        return new Promise( (resolve, reject)=>{
            let verify = true
            let count = 0
            let outAmount = undefined
            switch (name) {
                case 'wavesUsd':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['buy(wavesUsd)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['asks'][count] === undefined){
                                obj['buy(wavesUsd)'] = undefined
                                verify = false

                            }else{

                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                outAmount = amount/askPrice -object['fee']
                                console.log('result1 --->', amount/askPrice -object['fee'], '----->', count)
                                console.log('result2 --->', amount/bidPrice -object['fee'], '----->', count)
                                console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)
                                if((askAmount - outAmount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['buy(wavesUsd)'] = amount/askPrice -object['fee']
                                    obj['buy(wavesUsd)'] = this.fix(obj['buy(wavesUsd)'])
                                    verify = false
                                }

                            }
                        }
                    }
                    resolve(obj)
                    break
                case 'usdWaves':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['buy(usdWaves)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['bids'][count] === undefined){
                                obj['buy(usdWaves)'] = undefined
                                verify = false
                            }else{
                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                outAmount = amount*bidPrice
                                console.log('result1 --->', amount*askPrice, '----->', count)
                                console.log('result2 --->', amount*bidPrice, '----->', count)
                                console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)

                                if((bidAmount - amount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['buy(usdWaves)'] =(amount - object['fee'])*bidPrice
                                    obj['buy(usdWaves)'] = this.fix(obj['buy(usdWaves)'])
                                    verify = false
                                }
                            }
                        }
                    }
                    resolve(obj)
                    break
                case 'usdEuro':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['buy(usdEuro)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['bids'][count] === undefined){
                                obj['buy(usdEuro)'] = undefined
                                verify = false
                            }else{
                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])

                                outAmount = amount*bidPrice
                                console.log('result1 --->', amount*askPrice, '----->', count)
                                console.log('result2 --->', amount*bidPrice, '----->', count)
                                console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)

                                if((bidAmount - amount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['buy(usdEuro)'] =(amount - object['fee'])*bidPrice
                                    obj['buy(usdEuro)'] = this.fix(obj['buy(usdEuro)'])
                                    verify = false
                                }
                            }

                        }
                    }
                    resolve(obj)
                    break
                default:
                    console.warn('имя не обрабатывается --->', name)
                    break

            }


            resolve(obj)
        })
    }
    sell(pair,amount, obj,name){
        return new Promise( (resolve, reject)=>{
            let verify = true
            let count = 0
            let outAmount = undefined
            switch (name) {
                case 'wavesUsd':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['sell(wavesUsd)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['bids'][count] === undefined){
                                verify = false
                                obj['sell(wavesUsd)'] = undefined
                            }else{

                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])

                                outAmount = amount*bidPrice
                                // console.log('result1 --->',amount*bidPrice, '----->', count)
                                // console.log('result2 --->',amount*askPrice, '----->', count)
                                // console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)

                                if((bidAmount - amount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['sell(wavesUsd)'] = (amount- object['fee'])*bidPrice
                                    obj['sell(wavesUsd)'] = this.fix(obj['sell(wavesUsd)'])
                                    verify = false
                                }

                            }
                        }
                    }
                    resolve(obj)
                    break
                case 'usdWaves':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['sell(wavesUsd)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['asks'][count] === undefined){
                                obj['sell(usdWaves)'] = undefined
                                verify = false
                            }else{
                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                outAmount = amount/askPrice

                                console.log('result1 --->', amount/askPrice - object['fee'], '----->', count)
                                console.log('result2 --->', amount/bidPrice - object['fee'], '----->', count)
                                console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)
                                // console.log(amount/bidPrice -object['fee'], 'bidAmount --->', bidAmount)
                                // console.log(amount/askPrice -object['fee'])
                                // console.log('$$$$$$$$$$$$', askAmount, outAmount)
                                if((askAmount - outAmount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['sell(usdWaves)'] = amount/askPrice - object['fee']
                                    obj['sell(usdWaves)'] = this.fix(obj['sell(usdWaves)'])
                                    verify = false
                                }

                            }
                        }
                    }
                    resolve(obj)
                    break
                case'wavesEuro':
                    while(verify){
                        if(count >= 10){
                            verify = false
                            obj['sell(wavesEuro)'] = undefined
                        }else{
                            let bidAmount = {}
                            let bidPrice = {}
                            let askAmount = {}
                            let askPrice = {}
                            if(pair['bids'][count] === undefined){
                                obj['sell(wavesEuro)'] = undefined
                                verify = false
                            }else{
                                bidAmount = pair['bids'][count]['amount']/object['amount']
                                bidPrice = this.denormalize(pair['bids'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                askAmount = pair['asks'][count]['amount']/object['amount']
                                askPrice = this.denormalize(pair['asks'][count]['price'],obj['decimals'][`${ pair['pair']['priceAsset'] }`],obj['decimals'][`${ pair['pair']['amountAsset'] }`])
                                outAmount = amount*bidPrice
                                console.log('result1 --->',amount*bidPrice, '----->', bidAmount)
                                console.log('result2 --->',amount*askPrice, '----->', askAmount)
                                // console.log('bidPrice --->', bidPrice,'askPrice --->',askPrice, 'count--->',count)
                                if((bidAmount - amount) <= 0){
                                    console.warn('невозможно купить')
                                    count++
                                }else{
                                    obj['sell(wavesEuro)'] = (amount- object['fee'])*bidPrice
                                    obj['sell(wavesEuro)'] = this.fix(obj['sell(wavesEuro)'])
                                    verify = false
                                }
                            }
                        }
                    }
                    resolve(obj)
                    break
                default:
                    console.warn('имя не обрабатывается --->', name)
                    break

            }


            resolve(obj)
        })
    }
    fix(number){
        return parseFloat(number.toFixed(2))
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