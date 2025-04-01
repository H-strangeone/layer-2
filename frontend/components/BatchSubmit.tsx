"use client";
import { useState } from "react";
import axios from "axios";

export default function BatchSubmit() {
  const [amount, setAmount] = useState("");

  const submitTransaction = async () => {
    try {
      await axios.post("http://localhost:5500/deposit", { amount });
      alert("Deposit successful!");
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold">Batch Transactions</h2>
      <input
        type="number"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mt-2"
      />
      <button onClick={submitTransaction} className="btn-primary mt-2">
        Submit
      </button>
    </div>
  );
}
