import { WalletScrapperClient } from 'domains';
import { createAlchemy, Network } from '../alchemy';

const alchemy = createAlchemy(Network.ETH_MAINNET);

export function NftWalletScrapperClient(): WalletScrapperClient {
  return {
    getNfts: async (address) => (await alchemy.nft.getNftsForOwner(address)).ownedNfts,
  };
}
