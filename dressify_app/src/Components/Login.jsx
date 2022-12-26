import { FormControl, FormLabel, Image, Stack, Input, InputGroup, InputLeftAddon, InputRightAddon, Button, Center, Text, Icon, VStack, Heading, HStack, Box, InputRightElement } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { FcGoogle, FcPrivacy } from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetLoginData, loginuserrdx } from '../Redux/action'


const Login = () => {
  let navigate = useNavigate()
  const [valid,setvalid]=useState(false)
  const toast = useToast()
  useEffect(() => {
    dispatch(GetLoginData)
  }, [])
  let initlogin = {
    email: "",
    password: ""
  }
  const [show, setShow] = React.useState(false)
  const [logindata, setlogindata] = useState(initlogin)
  const handleClick = () => setShow(!show)

  const dispatch = useDispatch()
  const store = useSelector((store) => store.users)
  console.log("store: ", store);

  const change = (e) => {
    let { name, value } = e.target
    setlogindata({ ...logindata, [name]: value })
  }


  const login = () => {
    if (logindata.email != "" && logindata.password != "") {
      let s = store.filter((el) => {
        return el.email === logindata.email && el.password === logindata.password
        console.log("221");
      })
      if (s.length != 0) {
        toast({
          title: 'Login Successfully.',
          description: "Your Logged In",
          status: 'success',
          duration: 3000,
          position: "top",
          isClosable: true,
        })
        dispatch(loginuserrdx(s))
        console.log("s: ", s);
      } else {
        toast({
          title: 'Email or Password Wrong',
          description: "Something Went Wrong",
          // status: 'failed',
          duration: 3000,
          position: "top",
          isClosable: true,
        })
      }
    } else {
      toast({
        title: 'Input Fields Are Emply',
        description: "Please Fill all Inputs",
        // status: 'failed',
        duration: 9000,
        position: "top",
        isClosable: true,
      })
      setvalid(true)
    }
    // setlogindata(initlogin)
  }
  const submit = (e) => {
    e.preventDefalut()
  }

  return (
    <>
      <Box w="30%" h="400px" p={3} borderRadius={10} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" border="0px solid red" m="auto" mt={20}>
        <VStack h="25%" justifyContent="space-evenly">
          <Image mt={3} border="0px solid red" w="20%" src={process.env.PUBLIC_URL + "/Dressify_1.png"} />
          <HStack m={5}><Text>Don't have an account?</Text><Text color="blue"><Link to="/signup">SignUp</Link></Text></HStack>
        </VStack>
        <form style={{ border: "0px solid black", height: "fill-content" }}>
          <FormControl >
            <Input isInvalid={valid} bg="blackAlpha.100" _hover={{ bg: "blackAlpha.100" }} focusBorderColor="#666666" onChange={change} name='email' variant='filled' m={5} size='lg' type="email" w="90%" placeholder='Email' />
            <InputGroup w="90%" m={5} size='lg'>
              <Input
                isInvalid={valid}
                focusBorderColor="#666666"
                bg="blackAlpha.100" _hover={{ bg: "blackAlpha.100" }}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                name='password'
                onChange={change}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
        <Center><Button size="lg" _hover={{ bg: "#666666" }} w="90%" bg="#000000" color="white" onClick={() => {
          login()
        }} >LogIn</Button>
        </Center>
        <Center mt={5}>
          <Text fontSize={12}>©2022 Dressify Inc. All Rights Reserved.</Text>
        </Center>
        <Center>
          <Text fontSize={10} >Privacy Policy</Text>
        </Center>
      </Box>

    </>
  )
}

export default Login