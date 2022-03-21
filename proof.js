var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8876"));

function unlockAccount(account, password) {
  //web3.eth.defaultAccount = account;
  web3.eth.personal.unlockAccount(account, password, function (error, result) {
    console.log(result); // true & false
  });
}

function test3() {
  var abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor",
    },
    {
      "inputs": [],
      "name": "getRet",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool",
        },
      ],
      "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "simpleProof",
          "type": "bytes",
        },
        {
          "internalType": "bytes",
          "name": "wasmProof",
          "type": "bytes",
        },
        {
          "internalType": "string",
          "name": "path",
          "type": "string",
        },
        {
          "internalType": "bytes",
          "name": "key",
          "type": "bytes",
        },
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes",
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address",
        },
      ],
      "name": "verify",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
    },
  ];

  var addr = "0x3845023D6666762a97D6f2F06375c8842C757E68";
  var contract = new web3.eth.Contract(abi, addr);

  var simpleProof = Buffer.from(
    "0a0c69637332333a73696d706c6512047761736d1aab010aa8010a047761736d1220d835b82243f6f08bef30dc1d5d670af9dad9cf0d36d6de8d68294186438cc5be1a090801180120012a010022250801122101c9c8849ed125cc7681329c4d27b83b1fc8acf7a865c9d1d1df575cca56f48dbe22250801122101e91d4ce0dfdd8e7caf6dd992fcb4d4751f633eb608f493db790047c53bda680e2225080112210117a4294da907cf8e1d6fbdccf6b97e656762f6728534a212cc90ec34b8acdab6",
    "hex",
  );
  var wasmProof = Buffer.from(
    "0a0a69637332333a6961766c12330514dcb84d831c8a364c1f92f4e5b0b403e918cf319c000762616c616e636572045a78935d62d362b3ad039da90cee50735cc31a930a0a900a0a330514dcb84d831c8a364c1f92f4e5b0b403e918cf319c000762616c616e636572045a78935d62d362b3ad039da90cee50735cc3120d223130303030303030303030221a0e0801180120012a06000292e4ef07222c08011228020492e4ef07203df993b6ae10fa31022155b99a4f1be5fba2bbe4fe37fefeb4a3d1efdaf230a220222e08011207040892e4ef07201a212089856a0f2b97094df2ea2b23837ea445cd8ee15a1611f1ef133707bc839c195c222c08011228060e92e4ef07204ab26710b2967bba81a4cc83f0bb62e952a58ae458c240c923e3d02cdf63fc2520222e08011207081892e4ef07201a212060e86d28a87164ebe66cfbaf66394d94ab9d573ee6e422e5387dcb91e006f8e9222c080112280c3cba9af607206708e8a0ab9178d9c101ba3d8f51635f6d2c83f4ad50ea204b0b620397896d2a20222d080112290e8201ba9af60720078de9b8012d1ea1e4185251967b0cdffe64c0de5d7e16aea02f3eeae2aa1b8820222f0801120810e401ba9af607201a2120c2a9af443d70fe21c4e44d099da8916d732c9989e0571f4fe8a5760d130ea932222d0801122912e202e0ecf607201ca72bdfbbe1d84c30a168c6e2f9719cff1af07d7f80e7a060ceae24112e5f9020222f0801120814d608e0ecf607201a2120a9daf13cf167b4ac920f2c3e2022174199b273185f5715b29ac9b4bea57ce0fb222d0801122916e80fe0ecf60720d4bd3d4351e89b8fe020fb11690cc2da1a5105c15ef6a1ccab9aff084a99708920222d0801122918b821e0ecf607200ef3ef7285a10b63427665ee125114726851a2d80fa73f6f491109a49d690a2120222f080112081cb04ce0ecf607201a212097d196e694e9c677652ef639a818f751c8f2b1b116202e719985d89f22af74fd2230080112091e8aad01a482f707201a2120db280f300fac989105e3605570f0448f82d6850b6b51956c5314803c5a605937222e0801122a20beb002a482f707207f0b71efae64980b42859cf0f22b7b19cc0b8d81ac435f43c1cc489ee3aea10a20222e0801122a22fee204a482f70720c387790defff5d7ed63a2d30469096a659721ccc31e4e1c658615157de8df10420222e0801122a24bef207c0aff707209dafe745d332950709b5f55d2d9ced1dd442bb68cfdfc4adae20c7ef79b43e3b2022300801120926d8da0d92c4f707201a2120ffe6ab3355a7cf7dbd18dead46dbd7b7cc52005a897d1c54c2de6110cc9c7f8d22300801120928ce9b1392c4f707201a212082b9b56cd011d8227c40e2ed02255ec25516f41cbc5e7d1d1e78b006d128fb122230080112092aaac91892c4f707201a2120f1098099743f7db4867cc6c8200dc898b2967a3ecde54d80e55cc327f974c6c72230080112092c92b83492c4f707201a21202817b9debbe820c5e8b8ccaf9e7c66894e4099e4a0af694078bccc7a218a7a4222310801120a2ee097b501b0c5f707201a2120293ba969bc2baebcdf1e88b940162d1803a6af64b938fddb8fad906d98c43f9222310801120a32dae68303b0c5f707201a2120e317612a13127d08bac39412ef9fec9a98d73b346775ae3843aee58d081036a9222f0801122b34a0bca305b0c5f707206b720f6060f78fdef0ca3cb1cd70c8c4b461a5400ec9c49edc1683e5bd13a6d920222f0801122b38b0e0d50cb0c5f707206de8934bd17c58c5b4cff24acd2e73959cc1a5582b44b5c61b68aa88a104b7ab20222f0801122b3a8ad6db1eb0c5f70720e434db4024445f04be38692f4b922b8c5773317b4c0a856bfa5dd1434f3d188520",
    "hex",
  );
  var path = "/store/wasm/key";
  var key = Buffer.from(
    "0514dcb84d831c8a364c1f92f4e5b0b403e918cf319c000762616c616e636572045a78935d62d362b3ad039da90cee50735cc3",
    "hex",
  );
  var value = Buffer.from("22313030303030303030303022", "hex");
  var addr = "0x42768b2eED2C91e4fec5ed168bCFD50Ff3dC4527";

  unlockAccount(addr, "test");

  contract.methods.verify(simpleProof, wasmProof, path, key, value, addr).send({
    from: "0xabf150ef9de5a5dd310ae63d2532fe3243c57fd5",
    gas: 8000000,
  });

  contract.methods.getRet().call().then(
    function (value) {
      console.log("Ret:", value);
    },
  );
}

test3();
