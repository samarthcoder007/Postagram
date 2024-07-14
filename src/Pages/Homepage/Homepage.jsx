import { Box, Container, Flex, baseTheme } from '@chakra-ui/react'
import React from 'react'
import Feedposts from '../../components/Feedposts/FeedPosts'
import SuggestedUsers from "../../components/Suggestedusers/Suggestedusers"

const Homepage = () => {
  return (
    <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box py={10} flex={2}>
              <Feedposts/>
          </Box>
          <Box flex={3} mr={20} display={{base: "none", lg: "block"}} maxW={"300px"}>
              <SuggestedUsers/>
          </Box>
        </Flex>
    </Container>
  )
}

export default Homepage