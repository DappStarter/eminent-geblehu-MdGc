require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth outside proof hockey clip bubble genre'; 
let testAccounts = [
"0x3bc44827d37999cb496a2c64a80be3cc77bd17ecf36424fe730c2bd5300c7c6c",
"0xab64cd42ba465a9630710a17251e3f06e97b74a6108d7d4771990fe1dde99727",
"0xac6077922ce574985c3863ed1475c6ca3d8f2fb42eab10303946e4ba538ddd50",
"0xb824bcd1eb0866a7c60014d05f6f2785dc4decd3ffb84f70ebf3313b1b91d459",
"0xf29057cc3bb1eb297cd776defba0fd9792df9932992a0ab40ebbb6c3e2b36548",
"0x846acd4cfe75c6113fd69171688c4610edf67a9556d440dd769cc2110eeab14d",
"0x158fb912f583b7307902c56f1ac8679bddee70b87e6d60607c9919238586432d",
"0x0ef68361b607434cabea376593b892b0bd034bfa3ecb14d8906594e0ea8b9743",
"0xf24c90288097707d30268e6df42a6abb9310b8fa198e23ba7e152aa5a48cbf97",
"0xad3c1ed77ceb91676557b154f7aeecc0e9bc251878cbaf42ad7c1c50b5029c76"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


