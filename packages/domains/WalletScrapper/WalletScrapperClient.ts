import { Nft } from '../../alchemy';

export type WalletScrapperClient = {
  getNfts(walletAddress: string): Promise<Nft[]>;
};
