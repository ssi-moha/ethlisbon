import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import nftsReducer from './slices/nfts';
import addressReducer from './slices/address';

const rootReducer = combineReducers({
  user: combineReducers({
    nfts: nftsReducer,
    address: addressReducer,
  }),
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
