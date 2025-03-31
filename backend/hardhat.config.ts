import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const SEPOLIA_RPC_URL = process.env.ALCHEMY_SEPOLIA_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

if (!SEPOLIA_RPC_URL || !PRIVATE_KEY) {
  console.error("Missing environment variables! Check your .env file.");
  process.exit(1);
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
