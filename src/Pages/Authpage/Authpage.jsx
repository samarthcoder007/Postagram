import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import Authform from "../../components/Authform/Authform"

const Authpage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={1}>
      <Container  maxW={"container.md"} padding={0}> 
<Flex justifyContent={"center"} alignItems={"center"} gap={5}>

      <Box display={{base: "none" , md: "block"}}>
        <Image src='/auth.png' h={600} w={400} alt="Phone img"/>
      </Box>
      <VStack spacing={4} align={"stretch"}>
        <Authform/>
        <Box textAlign={"center"} >Get the app.</Box>
        <Flex>
          <Image src="/playstore.png" h={10} alt="playstore img"/>
          <Image src="/microsoft.png" h={10} alt="microsoft img"/>
        </Flex>
      </VStack>
      </Flex>
      </Container>
    </Flex>
  )
}

export default Authpage