const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const filecoinNetwork = hre.network.name === "calibnet";
  const linearNetwork = hre.network.name === "linea";

  if (filecoinNetwork || linearNetwork) {
    console.log(`Deploying on ${hre.network.name}...`);

    // Compile the contract
    await hre.run("compile");

    const contractName = "OnRampContract";
    const ContractFactory = await hre.ethers.getContractFactory(contractName);

    // Deploy the contract
    const contract = await ContractFactory.deploy();
    await contract.deployed();

    console.log(`${contractName} deployed to address: ${contract.address}`);

    // Optionally interact with Axelar Gateway contracts if required for cross-chain communication.
    if (filecoinNetwork) {
      const axelarGatewayAddress = "0x999117D44220F33e0441fbAb2A5aDB8FF485c54D"; // Address from the provided JSON
      console.log(`Using Axelar Gateway on Filecoin: ${axelarGatewayAddress}`);

      // Optionally, you can interact with Axelar contracts if needed for cross-chain setup.
    } else if (linearNetwork) {
      const axelarGatewayAddress = "0xe432150cce91c13a887f7D836923d5597adD8E31"; // Linear Gateway Address
      console.log(`Using Axelar Gateway on Linear: ${axelarGatewayAddress}`);
    }
  } else {
    console.error("Unsupported network. Use calibnet or linea.");
    process.exit(1);
  }
}

// Execute main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


