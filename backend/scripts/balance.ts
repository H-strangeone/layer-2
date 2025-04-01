import { ethers } from "ethers";
import dotenv from "dotenv";
import { getContract } from "../../frontend/utils/contract";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_SEPOLIA_URL);
const contract = getContract(provider);

async function getBalance(address: string) {
  const balance = await contract.getBalance(address);
  console.log(`Balance of ${address}:`, ethers.utils.formatEther(balance));
}

getBalance("0xYourWalletAddressHere");
