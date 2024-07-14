import { useState } from "react"
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";

const Signup = () => {

      const [showPassword,setshowPassword] = useState(false);
      const [inputs,setinputs] = useState({
        fullName:'',
        userName:'',
        email: '',
        password: '',
      })
      const  {loading,error,signup} = useSignupWithEmailAndPassword()

  return (
    <>
      <Input placeholder='Email' fontSize={14} type='email' size={"sm"} value={inputs.email} 
            onChange={(e)=>{setinputs({...inputs,email: e.target.value})}}/>
            <Input placeholder='Username' fontSize={14} type='text' size={"sm"} value={inputs.userName} 
            onChange={(e)=>{setinputs({...inputs,userName: e.target.value})}}/>
            <Input placeholder='Full Name' fontSize={14} type='text' size={"sm"} value={inputs.fullName} 
            onChange={(e)=>{setinputs({...inputs,fullName: e.target.value})}}/>
            <InputGroup>
            <Input placeholder='Password' fontSize={14} type={showPassword?"text":"password"} size={"sm"} value={inputs.password} 
            onChange={(e)=>{setinputs({...inputs,password: e.target.value})}}/>

            <InputRightElement h="full">
              <Button variant={"ghost"} size={"sm"} onClick={()=>{setshowPassword(!showPassword)}}>
              {showPassword?<ViewIcon/>:<ViewOffIcon/>}
              </Button>
            </InputRightElement>
            </InputGroup>

            {error && (
              <Alert status='error' fontSize={13} p={2} borderRadius={4}>
               <AlertIcon fontSize={12}/>
              {error.message}
              </Alert>
            )}

            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}
            isLoading = {loading}
            onClick={()=>{signup(inputs)}}>
           Sign  Up
            </Button>
    </>
  )
}

export default Signup