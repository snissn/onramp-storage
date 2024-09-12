# testing Solidity

This repo contains a test contract that uses the mcopy assembly instruction. This is meant to be used to determine if an EVM compatible service like Filecoin FEVM supports the MCOPY opcode. 

## Usage


```
mikers:~/dev/snissn/mcopy-hardhat-test$ npx hardhat run scripts/deploy.js --network calibnet
Compiled 1 Solidity file successfully (evm target: cancun).
Nothing to compile
Contract deployed to address: 0xe759249b16f29ec210Db3b815B654760402A34ED
Error calling `optimizedCopy` function on deployed contract:
Error: missing revert data in call exception; Transaction reverted without a reason string [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (data="0x", transaction={"from":"0xF00DCE36817586672B47480FB48C94177A97278B","to":"0xe759249b16f29ec210Db3b815B654760402A34ED","data":"0x733580550000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002048656c6c6f20576f726c64210000000000000000000000000000000000000000","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: message execution failed: exit 35, revert reason: none, vm error: message failed with backtrace:\n00: f0140331 (method 3844450837) -- ABORT(pc=190): undefined instruction (35)\n (RetCode=35)\n    at HttpProvider.request (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at EthersProviderWrapper.send (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":1,"_isProviderError":true}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:66:16)
    at EthersProviderWrapper.<anonymous> (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'missing revert data in call exception; Transaction reverted without a reason string',
  code: 'CALL_EXCEPTION',
  data: '0x',
  transaction: {
    from: '0xF00DCE36817586672B47480FB48C94177A97278B',
    to: '0xe759249b16f29ec210Db3b815B654760402A34ED',
    data: '0x733580550000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002048656c6c6f20576f726c64210000000000000000000000000000000000000000',
    accessList: null
  },
  error: ProviderError: message execution failed: exit 35, revert reason: none, vm error: message failed with backtrace:
  00: f0140331 (method 3844450837) -- ABORT(pc=190): undefined instruction (35)
   (RetCode=35)
      at HttpProvider.request (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at EthersProviderWrapper.send (/home/mikers/dev/snissn/mcopy-hardhat-test/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
}

```
