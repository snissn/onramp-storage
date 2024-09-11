# testing Solidity

This repo contains a hardhat config that uses the paris for the evm hardfork value which is the current default. There is also a second config that uses the latest `cancun` hardfork. Deploying Simpletoken and then getting the contracts name triggers an FEVM exception when run on Calibnet/mainnet/localdevnets. The usage is as follows:



## Compiling for the "paris" hardfork and correctly recovering token name

```
mikers@mikers-B560-DS3H-AC-Y1:~/dev/snissn/filecoin-calibnet-erc20$ npx hardhat run scripts/deploy.js --network calibnet
Compiled 6 Solidity files successfully (evm target: paris).
Nothing to compile
Contract deployed to address: 0xd7c9808d563309CCC1B8503B85af2CE88f5a6d72
Contract name: MyTokenTest
```

## Contract for the "cancun" hardfork and creating an exception when requesting the token name

```
mikers@mikers-B560-DS3H-AC-Y1:~/dev/snissn/filecoin-calibnet-erc20$ npx hardhat --config hardhat.config.cancun.js run scripts/deploy.js --network calibnet
Compiled 6 Solidity files successfully (evm target: cancun).
Nothing to compile
Contract deployed to address: 0x2b093Cb69ccdf6FAD6CcBc3cD36BBAe06ef308e7
Error calling `name` function on deployed contract:
Error: missing revert data in call exception; Transaction reverted without a reason string [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (data="0x", transaction={"from":"0xF00DCE36817586672B47480FB48C94177A97278B","to":"0x2b093Cb69ccdf6FAD6CcBc3cD36BBAe06ef308e7","data":"0x06fdde03","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: message execution failed: exit 35, revert reason: none, vm error: message failed with backtrace:\n00: f0140316 (method 3844450837) -- ABORT(pc=2568): undefined instruction (35)\n (RetCode=35)\n    at HttpProvider.request (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at EthersProviderWrapper.send (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":1,"_isProviderError":true}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:66:16)
    at EthersProviderWrapper.<anonymous> (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'missing revert data in call exception; Transaction reverted without a reason string',
  code: 'CALL_EXCEPTION',
  data: '0x',
  transaction: {
    from: '0xF00DCE36817586672B47480FB48C94177A97278B',
    to: '0x2b093Cb69ccdf6FAD6CcBc3cD36BBAe06ef308e7',
    data: '0x06fdde03',
    accessList: null
  },
  error: ProviderError: message execution failed: exit 35, revert reason: none, vm error: message failed with backtrace:
  00: f0140316 (method 3844450837) -- ABORT(pc=2568): undefined instruction (35)
   (RetCode=35)
      at HttpProvider.request (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at EthersProviderWrapper.send (/home/mikers/dev/snissn/filecoin-calibnet-erc20/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
}

```
