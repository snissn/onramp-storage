// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

// https://github.com/Uniswap/v4-core/blob/18b223cab19dc778d9d287a82d29fee3e99162b0/src/libraries/Lock.sol#L4

/// @notice This is a temporary library that allows us to use transient storage (TSTORE/TLOAD).
/// TODO: This library can be deleted when we have the transient keyword support in Solidity.
library Lock {
    // The slot holding the unlocked state, transiently. bytes32(uint256(keccak256("Unlocked")) - 1)
    bytes32 internal constant IS_UNLOCKED_SLOT = 0xc090fc4683624cfc3884e9d8de5eca132f2d0ec062aff75d43c0465d5ceeab23;

    /// @notice Unlocks the transient lock state
    function unlock() internal {
        assembly ("memory-safe") {
            // Use the hypothetical TSTORE opcode to store true (1) in transient storage
            tstore(IS_UNLOCKED_SLOT, true)
        }
    }

    /// @notice Locks the transient lock state
    function lock() internal {
        assembly ("memory-safe") {
            // Use the hypothetical TSTORE opcode to store false (0) in transient storage
            tstore(IS_UNLOCKED_SLOT, false)
        }
    }

    /// @notice Checks if the lock state is unlocked
    /// @return unlocked Returns true if the state is unlocked
    function isUnlocked() internal view returns (bool unlocked) {
        assembly ("memory-safe") {
            // Use the hypothetical TLOAD opcode to load the value from transient storage
            unlocked := tload(IS_UNLOCKED_SLOT)
        }
    }
}

contract TransientStorageExample {
    using Lock for *;

    /// @notice Public function to lock the state
    function lock() external {
        Lock.lock();
    }

    /// @notice Public function to unlock the state
    function unlock() external {
        Lock.unlock();
    }

    /// @notice Checks if the contract is currently unlocked
    /// @return Returns true if unlocked, false if locked
    function isUnlocked() external view returns (bool) {
        return Lock.isUnlocked();
    }
}



