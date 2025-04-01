"use client";
import Navbar from "../../components/Navbar";
import BatchSubmit from "../../components/BatchSubmit";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Layer 2 Transactions</h1>
        <BatchSubmit />
      </main>
    </div>
  );
}

