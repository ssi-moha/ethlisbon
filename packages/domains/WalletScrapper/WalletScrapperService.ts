import { Nft } from '../../alchemy';
import { WalletScrapperClient } from './WalletScrapperClient';

type WalletScrapperServiceType = {
  getNfts(address: string): Promise<Nft[]>;
};

export function WalletScrapperService(client: WalletScrapperClient): WalletScrapperServiceType {
  return {
    getNfts: (address: string) => client.getNfts(address),
  };
}
