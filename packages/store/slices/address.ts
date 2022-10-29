import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const balancesSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    connect(_, action: PayloadAction<string>) {
      return action.payload;
    },
    reset: () => '',
  },
});

export const { reset, connect } = balancesSlice.actions;

export default balancesSlice.reducer;
