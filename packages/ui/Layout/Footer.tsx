import { Box, BoxProps, Container } from '@chakra-ui/react'

import { Placeholder } from './Placeholder'

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="beige" {...props}>
      <Placeholder minH="20">Footer</Placeholder>
    </Box>
  )
}
