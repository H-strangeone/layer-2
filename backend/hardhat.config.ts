import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"; // Ensure ethers is properly imported
import dotenv from "dotenv";
import { task } from "hardhat/config";

dotenv.config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

console.log("RPC URL:", SEPOLIA_RPC_URL);
console.log("Private Key:", PRIVATE_KEY ? "Loaded" : "Missing");

if (!SEPOLIA_RPC_URL || !PRIVATE_KEY) {
  console.error(" Missing environment variables! Check your .env file.");
  process.exit(1);
}

// Define Hardhat task to print accounts
task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// Hardhat config
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
