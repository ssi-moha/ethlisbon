import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Nft, WalletScrapperService } from 'domains';
import { NftWalletScrapperClient } from 'infra';

const WalletScrapper = WalletScrapperService(NftWalletScrapperClient());

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (walletAddress: string) => await WalletScrapper.getNfts(walletAddress),
);

const initialState: Nft[] = [];

export const balancesSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (_, action) => action.payload);
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
