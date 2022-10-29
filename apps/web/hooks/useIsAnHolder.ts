import { Product } from 'apollo';
import { useAppSelector } from 'store';

export const useIsAnHolder = ({ curation }: Product) => {
  const collections = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  const isAnNftHolder = collections.includes(curation?.toLowerCase());

  return isAnNftHolder;
};
