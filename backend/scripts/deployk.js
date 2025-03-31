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
