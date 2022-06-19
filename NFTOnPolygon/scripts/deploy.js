
const hre = require("hardhat");

async function main() {
  const NFTOnPolygon = await hre.ethers.getContractFactory("NFTOnPolygon")
  const NFTOnPolygonContract = await NFTOnPolygon.deploy()
  await NFTOnPolygonContract.deployed()
  console.log("NFTOnPolygon Smart Contrart deployed to:", NFTOnPolygonContract.address)
  await NFTOnPolygonContract.safeMint("0xB2F183C5ba82eF8A0B2CbCD1C72029949b5F3304","ipfs://QmbsbuZ2QL8kHLaVNFhvGNYocTGvQY7JSuJvk3AZgtoZAK")
  console.log("NFT minted sucessfully")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
