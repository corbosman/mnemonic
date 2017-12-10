/* bip39 */
var bip39 = require('bip39');

/* crypto */
var crypto = require('crypto');

/* 128 bits random */
var random = crypto.randomBytes(16);

/* mnemonic */
var mnemonic = bip39.entropyToMnemonic(random.toString('hex'));

console.log(mnemonic);
