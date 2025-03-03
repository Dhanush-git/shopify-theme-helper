import { Avatar, Box, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import NotFound from './assets/404.gif'

function App() {
  return (
    <Flex p={"3"} direction="column" gap="2">
      <Flex py={"2"} gap={"2"} align={"center"}>
        <Avatar fallback={"BG"} src="https://baggit.com/cdn/shop/files/fav-icon.png" />
        <Box>
          <Heading size={"4"}>Shopify Theme Helper</Heading>
          <Text as="p" size={"1"}>A simple tool to help you preview your Shopify theme</Text>
        </Box>
      </Flex>
      <Separator my={"2"} size="4" />
      <Flex mx={"auto"} my={"6"} width={"90%"} gap={"2"} direction={"column"} justify={"center"} align={"center"}>
        <img src={NotFound} width={150}/>
        <Text as='p' weight={'bold'}>This is not a Shopify store.</Text>
        <Text as='p' align={"center"} size={"1"}>If you believe it is, please reopen the extension or refresh the page.</Text>
      </Flex>
    </Flex>
  )
}

export default App
