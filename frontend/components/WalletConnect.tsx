"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

// Declare window.ethereum for TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function WalletConnect() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask not installed!");
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWallet(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <button onClick={connectWallet} className="bg-blue-500 px-4 py-2 rounded">
      {wallet ? `Connected: ${wallet.slice(0, 6)}...` : "Connect Wallet"}
    </button>
  );
}
