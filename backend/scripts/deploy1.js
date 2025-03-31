import { ethers } from "hardhat";


async function main() {
  const Layer2Scaling = await ethers.getContractFactory("Layer2Scaling");
  const contract = await Layer2Scaling.deploy();

  await contract.waitForDeployment();

  console.log(`Contract deployed to: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


const { ethers } = require("hardhat");

async function main() {
  const Layer2 = await ethers.getContractFactory("Layer2");
  const layer2 = await Layer2.deploy();
  await layer2.deployed();
  console.log(`Layer2 contract deployed at: ${layer2.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

