import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
import Waves from '/static/html/components/component_modules/waves/waves.mjs'
// import actions from '/static/html/components/component_modules/relation/waves.mjs'
import events from '/static/html/components/component_modules/CustomEvent/index.mjs'
import relations from '/static/html/components/component_modules/relation/index.mjs'
let waves =  Waves()
let testObject = {}
testObject.staticProperty = {}
testObject.staticProperty.wallet = []
waves.then((waves)=> {
  const wvs = 10 ** 8;
  let object = {}
  object.dapp = '3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn'
  object.testnodes = 'https://testnodes.wavesnodes.com'
  object.client = []
  object.client.alice = '3MvegjWphvbYgEgQmqJiJhYWXnqPNTpieVc'
  describe('dex', async function () {
    this.timeout(10000);
    before(async function () {
      console.log('emoji', emoji('moon'))
    });
    it('connect account bank', function () {
      return new Promise(async (resolve, reject) => {
       let bank = await task.set(true, '','red', {}, '/waves/bank')
        console.log('# bank', bank)
        // waves.bank(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')
        // let bank = await events.addEventListener(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')
        // console.log(`${emoji('pray')}`,bank.dAppData)
        // resolve(bank.dAppData)
        reject(true)
      })
    })
    describe('account', async function () {
      it('wallet', function () {
        return new Promise(async (resolve, reject) => {
          let wallet = await task.set(true, '','red', {}, '/waves/wallet')
          resolve(true)
        })
      })
      it('Create wallet(создание кошелька)', function () {
        return new Promise(function (resolve, reject) {
         /*
          waves.wallet(true, `${emoji('thinking')} какие то свойства`, '3', actions, 'wallet')
          document.addEventListener('created-wallet', async (event) => {
            switch (event['detail']['/']) {
              case 'wallet':
                testObject.staticProperty.wallet = event.detail
                console.log(`${emoji(`dancer`)}`, event.detail, `${emoji(`dancer`)}`)
                break
              default:
                console.warn(`${emoji('thinking')}результат не обрабатывается${emoji('thinking')}`, event['detail']['/'], event['detail'])
                break
            }
            resolve(event.detail.wallet)
          })
          */
        })
      })
      it('transfer', function () {
        return new Promise(async (resolve, reject) => {
          let transfer = await task.set(true, '','red', {}, '/waves/transfer')
          resolve(true)
        })
      })
    })
    describe('Save wallet', async function () {
      it('Send wallet(сохранение кошелька)', function () {
        return new Promise(async (resolve, reject)=>{
          /*
          let scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
          );
          window.open(`http://localhost:5401`,'github',`height=${scrollWidth/3},width=${scrollWidth/1.5},scrollbars=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no,location=no,top=${scrollWidth/2-((scrollWidth/1.5)/2)},left=${scrollWidth/2-((scrollWidth/1.8)/2)}`);
          window.addEventListener("message", (event) => {
            console.log('connect', event.data)
            if(event.data.file === 'true'){
              resolve(true)
            }else{
              event.source.postMessage({key:'value'},'http://localhost:5401')
            }
          });
*/
        })
      })
      it('Faucet for wallet(перевод средств на кошелёк)', function () {
        return new Promise(async (resolve, reject)=>{
          //waves.faucet(true, `${emoji('thinking')} какие то свойства`, '3', actions, 'faucet')
        })
      })
    })
  })
})


// it('Create account', function () {
//     return new Promise(async (resolve, reject) => {
//
//         document.addEventListener('wallet',async (event)=>{
//
//             waves.createAccount(true, event , '9', relations['waves'],'wallet')
//
//         })
//         relations['waves']['wallet'][0]['property']['count'] = 3
//         let account =  await events.customEvent(true, '~~~~~' , '9', relations['waves'],'wallet')
//         let setAccount =  await events.customEvent(true, '~~~~~' , '12',account['wallets'],'setWallet')
//         resolve(setAccount)
// })
// await waves.nft(true, callback,'3', {'create-nft':[
//         {
//         '/':'create-nft',
//          name:gameObject.data,
//          description:'it is test token for monopoly',
//          dapp:'zone tower six sound oblige horn false blue enroll flash pact all',
//          proofs:[
//              'convince bubble claim case tube domain grief eyebrow decline witness bachelor mansion',
//              'kitten tooth maze behave purity dance differ stereo faint immune century peace',
//              'discover swim emerge demise dwarf inmate utility cycle hospital pistol sugar emotion'
//          ],
//          node:'http://testnodes.wavesnodes.com'
//         }
//     ]},'create-nft')

// resolve(true)
// })
// })
// it('save account', function () {
//     return new Promise(async (resolve, reject) => {
//     let nft = await waves.getNft('3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn', 12)
//     let object = {}
//     for(let key in nft){
//         try{
//
//             let item = JSON.parse(nft[key].description)
//             console.log()
//             if(item.name === 'Olga Gavrilova'){
//                 object = nft[key]
//                 break
//             }
//
//         }catch (e) {
//
//         }
//     }
//     await customEvents(true, 'отобразить данные на странице','3',object,'objectPlayer')
//     resolve(true)
// reject(true)
// })
// })
// it('Set Script', function () {
//     return new Promise(async (resolve, reject) => {
//     let nft = await waves.getNft('3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn', 12)
//     let object = {}
//     for(let key in nft){
//         try{
//
//             let item = JSON.parse(nft[key].description)
//             console.log()
//             if(item.name === 'Olga Gavrilova'){
//                 object = nft[key]
//                 break
//             }
//
//         }catch (e) {
//
//         }
//     }
//     await customEvents(true, 'отобразить данные на странице','3',object,'objectPlayer')
//     resolve(true)
// reject(true)
// })
// })
// it('Faucet Asseets', function () {
//     return new Promise(async (resolve, reject) => {
//     let nft = await waves.getNft('3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn', 12)
//     let object = {}
//     for(let key in nft){
//         try{
//
//             let item = JSON.parse(nft[key].description)
//             console.log()
//             if(item.name === 'Olga Gavrilova'){
//                 object = nft[key]
//                 break
//             }
//
//         }catch (e) {
//
//         }
//     }
//     await customEvents(true, 'отобразить данные на странице','3',object,'objectPlayer')
//     resolve(true)
// reject(true)
// })
// })
// })
// })