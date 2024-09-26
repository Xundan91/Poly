const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/rawrNFT.sol/rawrNFT.json");
require("dotenv").config();

const tokenAddress = "0x0EbA57c741F3C344FcC792dc09ac08D9A8C45B37"; // Your ERC20 contract address
const tokenABI = tokenContractJSON.abi;

async function main() {
  const imageUrls = [
    "https://bafybeihfa4kxlbq7rq364qi76kq3xpg4ot2fpzk6qxpgqc7wboji2atgry.ipfs.dweb.link/",
    "https://bafybeiep5f5nwruxsmbi4pgiizdm7t4u222uy26yg7o4ds2zm5syptwdsy.ipfs.dweb.link/",
    "https://bafybeibyr5tc4qkvftb47cpiicfwyxnerxlujhdrcuf4orkzd7gblw3ooe.ipfs.dweb.link/",
    "https://bafybeif272oslaqvdjma4c7nk3p4nnq2gsjkdcoufgpkp74skl7g3w4c24.ipfs.dweb.link/",
    "https://bafybeibffxqcgdel6ca5p637q5pkfdwv7boodr64bc57dp6cgr77g5ihy4.ipfs.dweb.link/",
  ];

  const prompts = [
    "imagine an image of super snake with 7 heads. Make it a deity with super powers",
    "imagine an image of an eagle soaring through the sky, with magical super power aura around it",
    "imagine an image of a ninja in shadowy background with a shiny and reflecting blade",
    "imagine an image of earth. Make the earth wear goggles driving a kart",
    "imagine an image of a cat as a superman with glowing eyes and super energy beam with super power aura",
  ];

  // Fetching the contract
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  console.log("Minting...");

  // Sending the mint transaction
  const tx = await token.mintNft(imageUrls, prompts);
  console.log("Transaction sent! Hash:", tx.hash);

  // Wait for the transaction to be mined
  console.log("Waiting for transaction confirmation...");
  await tx.wait()
    .then(() => console.log("Transaction confirmed!"))
    .catch(err => console.error("Error while waiting for transaction:", err));

  console.log(`You now have minted ${imageUrls.length} NFTs`);
}

// Run the main function and handle any errors
main().catch((error) => {
  console.error("Error encountered:", error);
  process.exitCode = 1;
});
