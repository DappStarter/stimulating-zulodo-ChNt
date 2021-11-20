require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin squirrel force thank'; 
let testAccounts = [
"0xe3203bba797de7e5ebbc8048d8893c34e31157a5e63e8bc990204f5b0da836dd",
"0x7a79857b4679118730d75b2ee8fe8afe5a78a2ae7efc7060e64ed0b12d356c76",
"0xc93da4db1ee1e27b626644c98ddcb80dc76524cedb39e43e298fd54123630830",
"0xaea18c4580e3e8c4dbfb460c7a1dda7fef9494471ae8ce317081ae54cf2f3b5c",
"0x0f947b79d52ba5298cf9a1e07c91d1d1d2505872eff7f4544ab9d23d3c229c54",
"0x79663d291a3ed58512f3dde043a0bd662af3eb64abf1e625f098a9c1a17c130a",
"0x5e75626b5df1e96302a417e0b8cda318fdc06f344dc08fe07ef90847aaaa71d7",
"0x24cf80734014671e9c0815cab789ccb7d6cbdce32a7a6cdaef4db310e01a6016",
"0x586aecb14a92cd60068d416432d4b346a549f0484e3dc31786f39de6c6e2910d",
"0xe083bc8a853bdd6f90e996e8ae9a6a93ddb6254ccaffc61a05abd63bcf6a9338"
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


