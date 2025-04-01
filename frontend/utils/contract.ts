import { ethers } from "ethers";  // This will provide access to both the Provider and Signer


const contractABI = require("../artifacts/contracts/Layer2Scaling.sol/Layer2Scaling.json").abi;
const contractAddress = require("../contractAddress.json").contractAddress;

export function getContract(signerOrProvider: ethers.Signer | ethers.providers.Provider) {
  return new ethers.Contract(contractAddress, contractABI, signerOrProvider);
}
