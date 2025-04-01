"use client";
import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    alert(`Withdrawing ${amount} ETH`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Withdraw Funds</h1>
      <input
        type="number"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleWithdraw} className="bg-red-500 px-4 py-2 ml-2">
        Withdraw
      </button>
    </div>
  );
}
