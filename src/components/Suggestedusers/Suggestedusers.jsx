import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./Suggesteduser"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {

  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

  return (
      <VStack gap={4} px={6} py={8} >
        <SuggestedHeader/>
        {suggestedUsers.length !== 0 && (
				<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
				</Flex>
			)}

			{suggestedUsers.map((user) => (
				<SuggestedUser user={user} key={user.id} />
			))}
        
        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
         2024 built by {""}<Link href="https://www.instagram.com/_samarthgupta/" target="_blank" fontSize={14} color={"blue.500"} style={{textDecoration: "none"}}>
         Samarth
         </Link>
        </Box>
      </VStack>
  )
}

export default SuggestedUsers