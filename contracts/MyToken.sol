// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyTokenTest", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function optimizedCopy(bytes memory data) public pure returns (bytes memory) {
        bytes memory result = new bytes(data.length);
        // This operation may utilize the MCOPY opcode depending on optimizer settings
        assembly {
            // Copy memory from data to result
            let length := mload(data)
            let source := add(data, 0x20)
            let destination := add(result, 0x20)
            // Utilize MCOPY opcode
            for { let i := 0 } lt(i, length) { i := add(i, 0x20) } {
                mstore(add(destination, i), mload(add(source, i)))
            }
        }
        return result;
    }
}
