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
