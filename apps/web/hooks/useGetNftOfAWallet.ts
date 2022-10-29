import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { fetchNFTS } from 'store/slices/nfts';

export const useGetNftOfAWallet = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNFTS('0x1a1710F0238b516c2fad1dd0F1EAD108656Fdc32'));
  }, [dispatch]);
};
