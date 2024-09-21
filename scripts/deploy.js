// scripts/interact.js

const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  const contractName = "OnRampContract"

  // Deploy the TransientStorageExample contract
  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.log(`${contractName} deployed to address: ${contract.address}`);
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




