"use client";
import { useState } from "react";

export default function BatchSubmit() {
  const [transactions, setTransactions] = useState<string[]>([]);

  const addTransaction = () => {
    const newTx = prompt("Enter recipient address:");
    if (newTx) setTransactions([...transactions, newTx]);
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-md">
      <h2 className="text-lg font-bold">Batch Transactions</h2>
      <button onClick={addTransaction} className="bg-green-500 px-4 py-2 mt-2">
        Add Transaction
      </button>
      <ul className="mt-4">
        {transactions.map((tx, index) => (
          <li key={index} className="text-sm">{tx}</li>
        ))}
      </ul>
    </div>
  );
}
