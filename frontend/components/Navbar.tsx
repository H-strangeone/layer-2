"use client";
import { useState, useEffect } from "react";
import WalletConnect from "../components/WalletConnect";


export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between bg-gray-900 text-white">
      <h1 className="text-lg font-bold">Layer 2 Dashboard</h1>
      <WalletConnect />
    </nav>
  );
}
