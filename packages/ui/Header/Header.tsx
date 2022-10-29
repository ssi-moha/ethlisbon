import { Heading, HStack } from '@chakra-ui/react';

type HeaderProps = { title: string; children: React.ReactNode };

export const Header = ({ title, children }: HeaderProps) => (
  <Heading as="h2">
    <HStack justifyContent="space-between">
      <span> {title} </span>
      {children}
    </HStack>
  </Heading>
);
