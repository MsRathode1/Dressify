import React, { useState } from 'react'
import { Flex, HStack, Spacer, InputRightElement, Text, Image, InputLeftElement, InputGroup, Container, Box, Center, Stack, Input, IconButton, FormLabel } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import AnchorLink from "react-anchor-link-smooth-scroll"


// import logo from "../Images/Dressify_1.png"
import { FaSearch, FaShoppingBag } from "react-icons/fa"

const TopNavbar = () => {
    const [display, changedisplay] = useState("none")
    return (
        <>
            <Box display={["none", "none", "block"]} bg="white" width={["80%", "", "80%"]} margin="auto" border="0px solid black">
                <Flex>
                    <HStack>
                        <Link to="/">
                            <Text p={2} _hover={{ bg: "#F2F2F2" }}  >WOMEN</Text>
                        </Link>
                        <Link to="men">
                            <Text _hover={{ bg: "#F2F2F2" }} p={2} >MEN</Text>
                        </Link>
                        <Link to="kids">
                            <Text _hover={{ bg: "#F2F2F2" }} p={2} >KIDS</Text>
                        </Link>
                        <Link to="life">
                            <Text _hover={{ bg: "#F2F2F2" }} p={2} >LIFE</Text>
                        </Link>
                    </HStack>
                    <Spacer />
                    <HStack>
                        <Link>
                            <Text fontSize={11} fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.8px" color="Gray.800" _hover={{
                                color: "black",
                                fontWeight: "bold"
                            }} p={2} ><Link to="/signup">Signup for Newsletter</Link></Text>
                        </Link>
                        <Link>
                            <Text fontSize={11} fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.8px" color="Gray.800" _hover={{
                                color: "black",
                                fontWeight: "bold"
                            }} p={2} >My wishlist</Text>
                        </Link>
                        <Link>
                            <Text fontSize={11} fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.8px" color="Gray.800" _hover={{
                                color: "black",
                                fontWeight: "bold"
                            }} p={2} >Kazakhstan | English</Text>
                        </Link>
                    </HStack>
                </Flex>
                <Flex border="0px solid black" height="auto" width="full" margin="auto" >
                    <Image border="0px solid black" w={300} m="auto" mt={-20} src={process.env.PUBLIC_URL + "/Dressify_1.png"} />
                    <FormLabel mt={2}>Shopping Bag</FormLabel>
                    <IconButton colorScheme='BlackAlpha 300' icon={<FaShoppingBag color='black' />} />
                </Flex>
                <Flex mt={-55} justify="space-between" border="0px solid black">
                    <HStack>
                        <Link to="/">
                            <Text color="gray.500" ml={2}>NEW ARRIVALS</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>DESIGNERS</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>CLOTHING</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>SHOES</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>BAGS</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>ACCESSORIES</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>FESTIVE SEASON</Text>
                        </Link>
                        <Link>
                            <Text color="gray.500" ml={2}>SALE</Text>
                        </Link>
                    </HStack>
                    <Flex border="0px solid black"  >
                        <InputGroup >
                            <Input focusBorderColor='white' border="white" placeholder='Search' />
                            <InputRightElement children={<FaSearch />} />
                        </InputGroup>
                    </Flex>
                </Flex>
            </Box>
            <IconButton aria-label="Open Menu" bg="none" size="lg" p="0px" _hover={{ bg: "none" }} mr={1} color="black" icon={<HamburgerIcon w="1.7em" h="1.7em" />} display={["block", "block", "none"]} onClick={() => changedisplay('block')} />
            <Flex w="100%" h="100%" color="white" bgColor="#141f1f" zIndex={20} pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" display={display} >
                <Flex justify="flex-end"><IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" bg="none" icon={<CloseIcon />} onClick={() => changedisplay('none')} /></Flex>
                <Box display="flex" gap="30px" flexDir="column" align="center" fontSize="2xl" >
                    <AnchorLink href='#Home' onClick={() => changedisplay('none')}  ><Text _hover={{ fontSize: "4xl" }} > Home</Text></AnchorLink>
                    <AnchorLink href='#About' onClick={() => changedisplay('none')} ><Text _hover={{ fontSize: "4xl" }} > About</Text></AnchorLink>
                    <AnchorLink href='#Skills' onClick={() => changedisplay('none')} ><Text _hover={{ fontSize: "4xl" }} > Skills</Text></AnchorLink>
                    <AnchorLink href='#Projects' onClick={() => changedisplay('none')} ><Text _hover={{ fontSize: "4xl" }} > Projects</Text></AnchorLink>
                    <AnchorLink href='#Contact' onClick={() => changedisplay('none')} ><Text _hover={{ fontSize: "4xl" }} > Contact</Text></AnchorLink>
                    <Link href='https://drive.google.com/uc?export=download&id=1N8u1mLyrARZ819XNrIY8QMMXvtKZg4Mz' _hover={{ textDecoration: "none" }} ><Text _hover={{ fontSize: "4xl" }} > Resume</Text></Link>
                </Box>
            </Flex>
        </>
    )
}

export default TopNavbar