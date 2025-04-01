"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Transactions() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5500/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Transaction History</h1>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index} className="border p-2 mt-2">{tx.hash}</li>
        ))}
      </ul>
    </div>
  );
}
