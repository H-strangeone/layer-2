// import { expect } from "chai";
// import { ethers } from "hardhat";
// import { Layer2Scaling, Layer2Scaling__factory } from "../typechain-types";
// import { Signer } from "ethers";

// describe("Layer2Scaling", function () {
//     let layer2Scaling: Layer2Scaling;
//     let owner: Signer, addr1: Signer;

//     beforeEach(async function () {
//         [owner, addr1] = await ethers.getSigners();
//         const Layer2ScalingFactory = await ethers.getContractFactory("Layer2Scaling") as Layer2Scaling__factory;
//         layer2Scaling = await Layer2ScalingFactory.deploy();
//         await layer2Scaling.waitForDeployment();
//     });

//     it("should submit a batch", async function () {
//         const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch1"));
//         await expect(layer2Scaling.submitBatch(txRoot))
//             .to.emit(layer2Scaling, "BatchSubmitted")
//             .withArgs(1, txRoot);
//     });

//     it("should verify a batch", async function () {
//         const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch2"));
//         await layer2Scaling.submitBatch(txRoot);
//         await expect(layer2Scaling.verifyBatch(1))
//             .to.emit(layer2Scaling, "BatchVerified")
//             .withArgs(1);
//     });

//     it("should report fraud and apply a penalty if fraud is false", async function () {
//         const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
//         await layer2Scaling.submitBatch(txRoot);
//         const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));
//         const initialBalance = await ethers.provider.getBalance(await addr1.getAddress());

//         await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
//             .to.emit(layer2Scaling, "FraudReported")
//             .withArgs(1, fraudProof);
        
//         const finalBalance = await ethers.provider.getBalance(await addr1.getAddress());
//         expect(finalBalance).to.be.lessThan(initialBalance - ethers.parseEther("0.05"));
//     });

//     it("should allow withdrawal", async function () {
//         await owner.sendTransaction({ to: await layer2Scaling.getAddress(), value: ethers.parseEther("1") });
//         await layer2Scaling.depositFunds({ value: ethers.parseEther("1") });

//         await expect(layer2Scaling.withdrawFunds(ethers.parseEther("0.5")))
//             .to.changeEtherBalances([layer2Scaling, owner], [-ethers.parseEther("0.5"), ethers.parseEther("0.5")]);
//     });

//     it("should finalize a batch after 1 week", async function () {
//         const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch4"));
//         await layer2Scaling.submitBatch(txRoot);
//         await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]); // Fast forward 1 week
//         await ethers.provider.send("evm_mine", []);

//         await expect(layer2Scaling.finalizeBatch(1))
//             .to.emit(layer2Scaling, "BatchFinalized")
//             .withArgs(1);
//     });
//     // it("should report fraud and apply a penalty if fraud is false", async function () {
//     //     const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
//     //     await layer2Scaling.submitBatch(txRoot);

//     //     // Fund addr1 to ensure it can pay the slashing penalty
//     //     await owner.sendTransaction({
//     //         to: await addr1.getAddress(),
//     //         value: ethers.parseEther("1"), // Sending 1 ETH
//     //     });
//     //     await layer2Scaling.connect(addr1).depositFunds({ value: ethers.parseEther("1") });

//     //     const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));
//     //     const initialBalance = await ethers.provider.getBalance(await addr1.getAddress());

//     //     await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
//     //         .to.emit(layer2Scaling, "FraudReported")
//     //         .withArgs(1, fraudProof);

//     //     const finalBalance = await ethers.provider.getBalance(await addr1.getAddress());
//     //     expect(finalBalance).to.be.lessThan(initialBalance - ethers.parseEther("0.05"));
//     // });
//     // it("should report fraud and apply a penalty if fraud is false", async function () {
//     //     const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
//     //     await layer2Scaling.submitBatch(txRoot);
//     //     const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));

//     //     // 🛠️ Fix: Ensure addr1 has enough balance before reporting fraud
//     //     await layer2Scaling.connect(addr1).depositFunds({ value: ethers.parseEther("1") });

//     //     const initialBalance = await ethers.provider.getBalance(await addr1.getAddress());

//     //     await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
//     //         .to.emit(layer2Scaling, "FraudReported")
//     //         .withArgs(1, fraudProof);
        
//     //     const finalBalance = await ethers.provider.getBalance(await addr1.getAddress());
//     //     expect(finalBalance).to.be.lessThan(initialBalance - ethers.parseEther("0.05"));
//     // });

//     // it("should report fraud and apply a penalty if fraud is false", async function () {
//     //     const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
//     //     await layer2Scaling.submitBatch(txRoot);
//     //     const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));

//     //     // Ensure addr1 has enough balance before reporting fraud
//     //     await layer2Scaling.connect(addr1).depositFunds({ value: ethers.parseEther("1") });

//     //     // Check initial balance of addr1 in the Layer2Scaling contract
//     //     const initialBalance = await layer2Scaling.balances(await addr1.getAddress());

//     //     // Call reportFraud and expect the FraudReported event to be emitted
//     //     await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
//     //         .to.emit(layer2Scaling, "FraudReported")
//     //         .withArgs(1, fraudProof);
        
//     //     // Check final balance of addr1 after the penalty is applied
//     //     const finalBalance = await layer2Scaling.balances(await addr1.getAddress());
//     //     // Expect that final balance is reduced by the slashing penalty (0.05 ETH)
//     //     expect(finalBalance).to.be.equal(initialBalance - ethers.parseEther("0.05"));
//     // });
//     it("should report fraud and apply a penalty if fraud is false", async function () {
//         const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
//         await layer2Scaling.submitBatch(txRoot);
//         const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));

//         // Ensure addr1 has enough balance before reporting fraud
//         await layer2Scaling.connect(addr1).depositFunds({ value: ethers.parseEther("1") });

//         // Check initial balance of addr1 in the Layer2Scaling contract
//         const initialBalance = await layer2Scaling.balances(await addr1.getAddress());

//         // Call reportFraud and expect the FraudReported event to be emitted
//         await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
//             .to.emit(layer2Scaling, "FraudReported")
//             .withArgs(1, fraudProof);
        
//         // Check final balance of addr1 after the penalty is applied
//         const finalBalance = await layer2Scaling.balances(await addr1.getAddress());
        
//         // Expect that final balance is reduced by the slashing penalty (0.05 ETH)
//         expect(finalBalance).to.be.equal(initialBalance - ethers.parseEther("0.05"));
//     });

// });
import { expect } from "chai";
import { ethers } from "hardhat";
import { Layer2Scaling, Layer2Scaling__factory } from "../typechain-types";
import { Signer } from "ethers";

describe("Layer2Scaling", function () {
    let layer2Scaling: Layer2Scaling;
    let owner: Signer, addr1: Signer;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const Layer2ScalingFactory = await ethers.getContractFactory("Layer2Scaling") as Layer2Scaling__factory;
        layer2Scaling = await Layer2ScalingFactory.deploy();
        await layer2Scaling.waitForDeployment();
    });

    it("should submit a batch", async function () {
        const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch1"));
        await expect(layer2Scaling.submitBatch(txRoot))
            .to.emit(layer2Scaling, "BatchSubmitted")
            .withArgs(1, txRoot);
    });

    it("should verify a batch", async function () {
        const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch2"));
        await layer2Scaling.submitBatch(txRoot);
        await expect(layer2Scaling.verifyBatch(1))
            .to.emit(layer2Scaling, "BatchVerified")
            .withArgs(1);
    });

    it("should allow withdrawal", async function () {
        await owner.sendTransaction({ to: await layer2Scaling.getAddress(), value: ethers.parseEther("1") });
        await layer2Scaling.depositFunds({ value: ethers.parseEther("1") });

        await expect(layer2Scaling.withdrawFunds(ethers.parseEther("0.5")))
            .to.changeEtherBalances([layer2Scaling, owner], [-ethers.parseEther("0.5"), ethers.parseEther("0.5")]);
    });

    it("should finalize a batch after 1 week", async function () {
        const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch4"));
        await layer2Scaling.submitBatch(txRoot);
        await ethers.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]); // Fast forward 1 week
        await ethers.provider.send("evm_mine", []);

        await expect(layer2Scaling.finalizeBatch(1))
            .to.emit(layer2Scaling, "BatchFinalized")
            .withArgs(1);
    });

    it("should report fraud and apply a penalty if fraud is false", async function () {
        const txRoot = ethers.keccak256(ethers.toUtf8Bytes("batch3"));
        await layer2Scaling.submitBatch(txRoot);
        const fraudProof = ethers.keccak256(ethers.toUtf8Bytes("fraudulent data"));

        // 🚀 Ensure addr1 deposits funds BEFORE calling reportFraud
        await layer2Scaling.connect(addr1).depositFunds({ value: ethers.parseEther("1") });

        // 🛠️ Log addr1's balance in the contract before reporting fraud
        const contractBalance = await layer2Scaling.balances(await addr1.getAddress());
        console.log("addr1 contract balance before fraud report:", ethers.formatEther(contractBalance));

        // Ensure addr1 has enough balance
        expect(contractBalance).to.be.at.least(ethers.parseEther("0.05"));

        // Call reportFraud and expect the FraudReported event
        await expect(layer2Scaling.connect(addr1).reportFraud(1, fraudProof))
            .to.emit(layer2Scaling, "FraudReported")
            .withArgs(1, fraudProof);

        // Check final balance
        const finalBalance = await layer2Scaling.balances(await addr1.getAddress());
        console.log("addr1 contract balance after fraud report:", ethers.formatEther(finalBalance));

        expect(finalBalance).to.be.equal(contractBalance - ethers.parseEther("0.05"));
    });
});
