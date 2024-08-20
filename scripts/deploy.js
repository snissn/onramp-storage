const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  // Deploy the contract
  const ContractFactory = await hre.ethers.getContractFactory("MyToken");
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.log(`Contract deployed to address: ${contract.address}`);

  try {
    // Attempt to call the `name` function
    const contractName = await contract.name();
    console.log(`Contract name: ${contractName}`);
  } catch (error) {
    console.error("Error calling `name` function on deployed contract:");
    console.error(error);
  }
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


