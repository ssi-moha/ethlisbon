import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useAppSelector } from 'store';
import { Main } from './Main';
import { Navbar } from './Navbar';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [party, setParty] = useState(false);
  const { width, height } = useWindowSize();
  const address = useAppSelector((state) => state.user.address);

  useEffect(() => {
    if (address) {
      setParty(true);
    }
  }, [address]);

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <Confetti
          width={width}
          height={height}
          numberOfPieces={party ? 500 : 0}
          recycle={false}
          onConfettiComplete={(confetti: any) => {
            setParty(false);
            confetti?.reset();
          }}
        />
      </div>

      <Flex direction="column" flex="1">
        <Navbar />

        <Main>{children}</Main>
      </Flex>
    </>
  );
};
