"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5500/admin/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Tx Hash</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td className="border p-2">{tx.hash}</td>
              <td className="border p-2">{tx.status}</td>
              <td className="border p-2">{new Date(tx.timestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
