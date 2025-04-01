"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract"; // Ensure the path is correct

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function WalletConnect() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask not installed!");

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();  // This is the signer
      const account = await signer.getAddress();
      setWallet(account);
      setSigner(signer);  // Set signer state
      fetchBalance(account, signer);  // Pass signer to fetch balance
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Fetch user balance from contract
  const fetchBalance = async (address: string, signer: ethers.Signer | null) => {
    if (!signer) return;

    try {
      const contract = getContract(signer);  // Use signer to interact with the contract
      const bal = await contract.getBalance(address);
      setBalance(ethers.utils.formatEther(bal));
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  // Deposit funds into the contract
  const depositFunds = async () => {
    if (!wallet || !signer) return alert("Connect wallet first!");

    try {
      const contract = getContract(signer);  // Use signer to interact with the contract
      const tx = await contract.depositFunds({ value: ethers.utils.parseEther("0.1") });
      await tx.wait();
      alert("Deposit successful!");
      fetchBalance(wallet, signer);  // Update balance after deposit
    } catch (error) {
      console.error("Error depositing:", error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="btn-primary">
        {wallet ? `Connected: ${wallet.slice(0, 6)}...` : "Connect Wallet"}
      </button>
      {wallet && (
        <div className="mt-2">
          <p>Balance: {balance} ETH</p>
          <button onClick={depositFunds} className="btn-primary mt-2">Deposit 0.1 ETH</button>
        </div>
      )}
    </div>
  );
}


