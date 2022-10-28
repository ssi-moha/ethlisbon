import { WalletScrapperClient } from "../domain/WalletScrapper";
import { createAlchemy, Network } from "../alchemy";

const alchemy = createAlchemy(Network.ETH_MAINNET);

export function NftWalletScrapperClient(): WalletScrapperClient {
  return {
    getNfts: async (address) => {
      return (await alchemy.nft.getNftsForOwner(address)).ownedNfts;
    },
  };
}
