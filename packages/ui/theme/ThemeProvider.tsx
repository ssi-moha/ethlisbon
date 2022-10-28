import { ChakraProvider, theme } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);
