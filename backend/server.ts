import express from "express";
import { ethers } from "ethers";
import cors from "cors";
import dotenv from "dotenv";
import { getContract } from "../frontend/utils/contract";


dotenv.config();

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_SEPOLIA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = getContract(wallet);

// 🔹 Fetch Balance
app.get("/balance/:address", async (req, res) => {
  try {
    const balance = await contract.getBalance(req.params.address);
    res.json({ balance: ethers.utils.formatEther(balance) });
  } catch (error) {
    console.error("Error fetching balance:", error);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

// 🔹 Deposit Funds
app.post("/deposit", async (req, res) => {
  try {
    const { amount } = req.body;
    const tx = await contract.depositFunds({ value: ethers.utils.parseEther(amount) });
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (error) {
    console.error("Error depositing funds:", error);
    res.status(500).json({ error: "Deposit failed" });
  }
});

// 🔹 Get Transaction History
app.get("/transactions", async (_, res) => {
  try {
    const events = await contract.queryFilter(contract.filters.DepositMade());
    const transactions = events.map((event) => ({
      hash: event.transactionHash,
      amount: ethers.utils.formatEther(event.args?.amount),
      timestamp: event.args?.timestamp.toNumber(),
    }));
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
