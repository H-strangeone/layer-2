import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const Layer2Scaling = await ethers.getContractFactory("Layer2Scaling");
  const contract = await Layer2Scaling.deploy();
  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
