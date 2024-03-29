import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';
import ProviderSeed  from '@waves/provider-seed';
import transactions from '@waves/waves-transactions';
import BigNumber from "@waves/bignumber"
export default {
        Signer:Signer['default'],
        Provider:Provider['default'],
        ProviderSeed:ProviderSeed['default'],
        libs:transactions['libs'],
        signTx:transactions['signTx'],
        order: transactions['order'],
        transactions:transactions,
        TEST_NET_CHAIN_ID: transactions['libs']['crypto']['TEST_NET_CHAIN_ID'],
        concat:transactions['libs']['crypto']['concat'],
        signBytes:transactions['libs']['crypto']['signBytes'],
        base58Encode:transactions['libs']['crypto']['base58Encode'],
        base58Decode:transactions['libs']['crypto']['base58Decode'],
        stringToBytes:transactions['libs']['crypto']['stringToBytes'],
        BigNumber:BigNumber['BigNumber'],
        cancelOrder:transactions["cancelOrder"],

}