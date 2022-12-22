import { FormControl, FormLabel, Image, Stack, Input, InputGroup, InputLeftAddon, InputRightAddon, Button, Center, Text, Icon, VStack, Heading, HStack, Box, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle, FcPrivacy } from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { GetLoginData, PostData } from '../Redux/action'
import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  let initsate = {
    name: "",
    email: "",
    phone: "",
    password: ""
  }
  const [show, setShow] = React.useState(false)
  const [valid,setvalid]=useState(false)
  const handleClick = () => setShow(!show)
  const [formdata, setformdata] = useState(initsate)
  const dispatch = useDispatch()
  const toast = useToast()
  const handelAdd = (data) => {
    if (formdata.name != "" && formdata.email != "" && formdata.phone != "" && formdata.password != "") {
      dispatch(PostData(data))
      toast({
        title: 'SignUp Successfully',
        description: "Go to the login page",
        position: "top",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Inputs Are Empty',
        description: "Please fill all the details",
        position: "top",
        // status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setvalid(true)
    }
  }

  const submit = (e) => {
    e.preventDefalut()
  }

  const change = (e) => {
    let { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  console.log(formdata);

  return (
    <>
      <Box w="30%" h="800px" borderRadius={10} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" border="0px solid red" m="auto" mt={20}>
        <VStack h="25%" justifyContent="space-evenly">
          <Image border="0px solid red" w="30%" src={process.env.PUBLIC_URL + "/Dressify_1.png"} />
          <HStack><Text>Already have an account?</Text><Text color="blue"><Link to="/login">Login</Link></Text></HStack>
        </VStack>
        <form onSubmit={submit} style={{ border: "0px solid black", height: "fill-content" }}>
          <FormControl >
            <Input isInvalid={valid} bg="blackAlpha.100" _hover={{ bg: "blackAlpha.100" }} onChange={change} focusBorderColor="#666666" name='name' variant='filled' m={5} size='lg' w="90%"  placeholder='Name' />
            <Input isInvalid={valid} bg="blackAlpha.100" _hover={{ bg: "blackAlpha.100" }} focusBorderColor="#666666" onChange={change}  name='email' variant='filled' m={5} size='lg' type="email" w="90%" placeholder='Email' />
            <InputGroup m={5} size='lg' w="90%">
              <InputLeftAddon bg="blackAlpha.400" _hover={{ bg: "blackAlpha.100" }} color="gray.600" size='lg' children='+91' />
              <Input isInvalid={valid} bg="blackAlpha.100" focusBorderColor="#666666" _hover={{ bg: "blackAlpha.100" }} onChange={change}  name='phone' type='number' size='lg' placeholder='phone number' />
            </InputGroup>
            <InputGroup w="90%" m={5} size='lg'>
              <Input
                focusBorderColor="#666666"
                bg="blackAlpha.100" _hover={{ bg: "blackAlpha.100" }}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                name='password'
                onChange={change}
                isInvalid={valid}
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
          handelAdd(formdata)
        }} >Sign-Up</Button>
        </Center>
        <Text textAlign="center">Or</Text>
        <Center><Button size="lg" bg="blackAlpha.600" _hover={{ bg: "blackAlpha.500" }} leftIcon={<FcGoogle />} w="90%" color="white" >SIGN UP WITH GOOGLE</Button>
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

export default SignUp