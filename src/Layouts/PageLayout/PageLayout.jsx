import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { auth } from '../../Firebase/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar'

const PageLayout = ({children}) => {

   const {pathname}  = useLocation()
   const [user,loading] = useAuthState(auth)
   const canRenderSiderbar = (pathname!=="\auth" && user)
   const canRenderNavbar = (!user && !loading && pathname!=='/auth')

   const checkingUserIsAuth = (!user && loading)
   if(checkingUserIsAuth){
    return <PageLayoutSpinner/>
   }

   return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {canRenderSiderbar ? (
        <Box w={{base: "70px", md:"240px"}}>
            <Sidebar/>
        </Box>

        ):null}
        {canRenderNavbar ? <Navbar/> : null}
        <Box flex={1} w={{ base: "calc(100% - 70px)",md: "(100% - 240px)" }} mx={"auto"}>
          {children}
        </Box>
    </Flex>
  )
}

const PageLayoutSpinner = () => {
  return (
    <Flex dir='column' h={"100vh"} alignItems={"center"} justifyContent={"center"}>
         <Spinner size={'xl'}/>
    </Flex>
  )
}

export default PageLayout