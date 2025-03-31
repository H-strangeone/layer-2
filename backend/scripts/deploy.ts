import { ethers } from "hardhat";

async function main(): Promise<void> {
  // Ensure the name exactly matches the Solidity contract name
  const Layer2Scaling = await ethers.getContractFactory("Layer2Scaling");
  const layer2Scaling = await Layer2Scaling.deploy();
  await layer2Scaling.waitForDeployment();

  const contractAddress = await layer2Scaling.getAddress();
  console.log(`Layer2Scaling contract deployed at: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
