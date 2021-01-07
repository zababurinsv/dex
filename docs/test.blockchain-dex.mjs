import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
import Waves from '/static/html/components/component_modules/waves/waves.mjs'
import actions from '/static/html/components/component_modules/action/waves.mjs'
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
  describe('DEX', async function () {
    this.timeout(10000);
    before(async function () {
      console.log('emoji', emoji('moon'))
    });
    it('Connect bank(подключение банка)', function () {
      return new Promise(async (resolve, reject) => {
        action
        // waves.bank(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')
        // let bank = await events.addEventListener(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')
        console.log(`${emoji('pray')}`,bank.dAppData)
        resolve(bank.dAppData)
      })
    })
    describe('case №1', async function () {
      it('case №1 action 1', function () {
        return new Promise(async (resolve, reject) => {
          resolve(true)
        })
      })
      it('case №1 action 2', function () {
        return new Promise(async (resolve, reject) => {
          resolve(true)
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