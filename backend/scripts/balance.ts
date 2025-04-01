import { ethers } from "hardhat";

async function main() {
    const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/2e2fc88fb4bb40669f6c3080abadf66b");
    const wallet = new ethers.Wallet("215cb5ebfa0a18fc41abde54e7d92ebbce00ee952391e0b6bc0e8304764ec6e7", provider);

    const balance = await provider.getBalance(wallet.address);
    console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
