import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchNFTS } from 'store/slices/nfts';

export const useGetNftOfAWallet = () => {
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.user.address);
  const nfts = useAppSelector((state) => state.user.nfts);

  useEffect(() => {
    dispatch(fetchNFTS(address));
  }, [dispatch, address]);
};
