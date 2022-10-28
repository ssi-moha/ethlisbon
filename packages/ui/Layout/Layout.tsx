import { Flex } from "@chakra-ui/react"
import { Main } from "./Main"
import { Navbar } from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" flex="1">
      <Navbar />

      <Main>
        {children}
      </Main>
    </Flex>
  )
}
