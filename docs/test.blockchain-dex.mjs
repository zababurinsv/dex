import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
let testObject = {}
testObject.staticProperty = {}
testObject.staticProperty.wallet = []
const wvs = 10 ** 8;
let object = {}
describe('dex', async function () {
  this.timeout(10000);
  before(async function () {
    // console.log('emoji', emoji('moon'))
  });
  it('connect account', function () {
    return new Promise(async (resolve, reject) => {
      let dApp = await task.set(true, '','red', {}, '/waves/dApp');
      (dApp.status && dApp.message)
        ? resolve(dApp)
        : reject(dApp)
    })
  })

  describe('NFT', async function () {
    it('get NFT token', function () {
      return new Promise(async (resolve, reject) => {
        let transfer = await task.set(true, '','red', {
          name:'accompanist',
          description:'olga',
        }, '/get/nft');
        (transfer.status && transfer.message)
          ? resolve(transfer)
          : reject(transfer)
      })
    })
    it('create NFT', function () {
      return new Promise(async (resolve, reject) => {
        let nft = await task.set(false, '','red', {
          name:'surok',
          description:'веснадцать'
        }, '/create/nft');
        (nft.status && nft.message)
          ? resolve(nft)
          : reject(nft)
      })
    })
  })
  describe('waves', async function () {
    it('create wallet', function () {
      return new Promise(async (resolve, reject) => {
        let wallet = await task.set(false, '','red', {}, '/waves/create/wallet');
        (wallet.status && wallet.message)
          ? resolve(wallet)
          : reject(wallet)
      })
    })
    it('transfer', function () {
      return new Promise(async (resolve, reject) => {
        let transfer = await task.set(false, '','red', {
          from:'bob',
          to:'alice'
        }, '/waves/transfer');
        (transfer.status && transfer.message)
          ? resolve(transfer)
          : reject(transfer)
      })
    })
  })
  describe('form', async function () {
    it('Bank views(заполнение полей формы)', function () {
      return new Promise(async function (resolve, reject) {
        // try{
        //   testObject.staticProperty.bank.balance = await waves.balance(testObject.staticProperty.bank['/'])
        //   document.addEventListener('bank-form-end',async (event)=>{
        //     if(event.detail.data){
        //       resolve(true)
        //     }else{
        //       reject(true)
        //     }
        //   })
        //   customEvents('bank-form', testObject.staticProperty.bank)
        // }catch (e) {
        //   reject(e)
        // }
        resolve(true)
      })
    })
    it('input wallet(ввод кошелька)', function () {
      return new Promise(async (resolve, reject)=> {
        // try{
        //   testObject.staticProperty.bank.clients[0].balance = await waves.balance(testObject.staticProperty.bank.clients[0].wallets.waves.address)
        //   document.addEventListener('input-wallet-end',async (event)=>{
        //     if(event.detail.data.status){
        //       resolve(true)
        //     }else{
        //       reject( event.detail )
        //     }
        //
        //   })
        //   customEvents('input-wallet', testObject.staticProperty.bank.clients[0].balance)
        // }catch (e) {
        //   reject(e)
        // }
        resolve(true)
      })
    })
  })
  describe('wallet', async function () {
    it('Send wallet', function () {
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
        resolve(true)
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