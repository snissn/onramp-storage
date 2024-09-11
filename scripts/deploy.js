const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  // Deploy the contract
  const ContractFactory = await hre.ethers.getContractFactory("MCOPYTest");
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.log(`Contract deployed to address: ${contract.address}`);

  try {
    // Test data
    //const testData = hre.ethers.utils.formatBytes32String("Test Data");
    const testData = "0x48656c6c6f20576f726c64210000000000000000000000000000000000000000"; // hello world

    // Call the optimizedCopy function
    const result = await contract.optimizedCopy(hre.ethers.utils.arrayify(testData));

    console.log("Original Data:", testData);
    console.log("Copied Data:", hre.ethers.utils.parseBytes32String(result));

  } catch (error) {
    console.error("Error calling `optimizedCopy` function on deployed contract:");
    console.error(error);
  }
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


