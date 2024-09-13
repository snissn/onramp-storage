// scripts/interact.js

const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  // Deploy the TransientStorageExample contract
  const ContractFactory = await hre.ethers.getContractFactory("TransientStorageExample");
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.log(`TransientStorageExample deployed to address: ${contract.address}`);

  try {
    // Check the initial lock state
    let isUnlocked = await contract.isUnlocked();
    console.log(`Initial state (should be false/locked): ${isUnlocked}`);

    // Unlock the contract
    const unlockTx = await contract.unlock();
    await unlockTx.wait();
    console.log("Unlocked the contract.");

    // Check the state after unlocking
    isUnlocked = await contract.isUnlocked();
    console.log(`State after unlocking (should be true/unlocked): ${isUnlocked}`);

    // Lock the contract
    const lockTx = await contract.lock();
    await lockTx.wait();
    console.log("Locked the contract.");

    // Check the state after locking
    isUnlocked = await contract.isUnlocked();
    console.log(`State after locking (should be false/locked): ${isUnlocked}`);
  } catch (error) {
    console.error("Error interacting with the deployed contract:");
    console.error(error);
  }
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




