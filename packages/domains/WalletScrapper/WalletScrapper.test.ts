import type { WalletScrapperClient } from './WalletScrapperClient';
import { WalletScrapperService } from './WalletScrapperService';

const client: WalletScrapperClient = {
  // @ts-ignore
  getNfts: async (address) => [
    {
      contract: '0x00',
      description: 'My Nft',
      title: 'My Nft',
    },
  ],
};
describe('Wallet Scrapper', () => {
  it('should return every nft of a wallet', async () => {
    expect(await WalletScrapperService(client).getNfts('0x00')).toEqual([
      {
        contract: '0x00',
        description: 'My Nft',
        title: 'My Nft',
      },
    ]);
  });
});
