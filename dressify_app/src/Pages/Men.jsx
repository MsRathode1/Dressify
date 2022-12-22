import { Box, Image, Text, VStack, HStack, Flex, Icon, Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaEuroSign } from "react-icons/fa"
import { useNavigate } from 'react-router'

const Men = () => {
  let navigate = useNavigate()
  return (
    <>
      <Box w="80%" m="auto" mt={5}>
        <Image src='https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/DESKTOP_2x_20221107134833.jpg?imwidth=1180&imdensity=1' />
      </Box>
      <Stack>
        <Heading m="auto" mt={10} fontWeight={1}>NEW ARRIVALS</Heading>
      </Stack>
      <HStack justifyContent="space-between" w="80%" m="auto" mt={10} >
        <Flex>
          <Text ml={2}>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>

          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
      </HStack>
      <HStack border="0px solid black" w="80%" m="auto" mt={5} >
        <VStack border="0px solid black">
          <Box>
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00674504.jpg' />
            <Text mt={2} textAlign="center">Tom Ford</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>2,275</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/21/P00702454.jpg' />
            <Text mt={2} textAlign="center">UNDERCOVER</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>549</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a4/P00709244.jpg' />
            <Text mt={2} textAlign="center">MONCLEAR</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>845</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/83/P00737621.jpg' />
            <Text mt={2} textAlign="center">GUCCI</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>375</Text>
          </Box>
        </VStack>
      </HStack>
      <HStack w="20%" m="auto" mt="40px" ><Button mx={95} px={10} borderRadius="none" bg="black" _hover="black" color="white" onClick={()=>{
       return navigate("MenProducts")
      }} >View ALL</Button></HStack>
      <HStack w="80%" m="auto" mt={10} h={700} border="0px solid black">
        <VStack w="50%" border="0px solid red" h="full" bg="black">
          <VStack p={10} alignItems="self-start" w="80%" border="0px solid white" margin={60} mt="200px">
            <Heading fontWeight={2} fontFamily="Arial, Helvetica, sans-serif" color="white" size="2xl">The perfect gift</Heading>
            <Text color="white">The pieces to add to your wishlist</Text>
            <Button borderRadius="none" px="10">SHOP NOW</Button>
          </VStack>
        </VStack>
        <Box h="full">
          <Image ml={-5} h="full" src='https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=1' />
        </Box>
      </HStack>
      <HStack justifyContent="space-between" w="80%" m="auto" mt={10} >
        <Flex>
          <Text ml={2}>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>

          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
      </HStack>
      <HStack border="0px solid black" w="80%" m="auto" mt={5} >
        <VStack border="0px solid black">
          <Box>
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/aa/P00501799.jpg' />
            <Text mt={2} textAlign="center">Tom Ford</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>2,275</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0e/P00734009.jpg' />
            <Text mt={2} textAlign="center">UNDERCOVER</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>549</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b8/P00488900.jpg' />
            <Text mt={2} textAlign="center">MONCLEAR</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>845</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2c/P00689719.jpg' />
            <Text mt={2} textAlign="center">GUCCI</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>375</Text>
          </Box>
        </VStack>
      </HStack>
      <HStack  w="80%" m="auto" mt={10} h={700} border="0px solid black">
        
        <Box h="full">
          <Image  h="full" src='https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=1' />
        </Box>
        <VStack  w="50%" border="0px solid red" h="full" bg="black">
          <VStack p={10} alignItems="self-start" w="80%" border="0px solid white" margin={60}  mt="200px">
            <Heading fontWeight={2} fontFamily="Arial, Helvetica, sans-serif" color="white" size="2xl">Statement pants</Heading>
            <Text color="white">Build looks that turn heads with standout pants</Text>
            <Button borderRadius="none" px="10">SHOP NOW</Button>
          </VStack>
        </VStack>
      </HStack>
      <HStack justifyContent="space-between" w="80%" m="auto" mt={10} >
        <Flex>
          <Text ml={2}>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>

          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
        <Flex>
          <Text>NEW ARRIVALS</Text>
          <Icon mt={1} ml={2} color="white" _hover={{ color: "gray" }} as={FaStar}></Icon>
        </Flex>
      </HStack>
      <HStack border="0px solid black" w="80%" m="auto" mt={5} >
        <VStack border="0px solid black">
          <Box>
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/36/P00735096.jpg' />
            <Text mt={2} textAlign="center">Tom Ford</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>2,275</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/8b/P00701249.jpg' />
            <Text mt={2} textAlign="center">UNDERCOVER</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>549</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0a/P00692598.jpg' />
            <Text mt={2} textAlign="center">MONCLEAR</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>845</Text>

          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box >
            <Image src='https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9a/P00691981.jpg' />
            <Text mt={2} textAlign="center">GUCCI</Text>
            <Text fontWeight="bold" textAlign="center"><Icon mt={1} as={FaEuroSign}></Icon>375</Text>
          </Box>
        </VStack>
      </HStack>
      <Box w="80%" m="auto" mt={10}>
     <Heading color="black" textAlign="center" fontWeight={3} size="xs">MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</Heading>
      <Box m="auto" mt={2} w="90%">
      <p>
      Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.
      </p>
      </Box>
      <HStack gap={10} m="auto" mt={5} w="90%">
        <VStack >
          <Text>A LUXURY SHOPPING EXPERIENCE</Text>
          <ul style={{fontSize:"3"}}>
            <li>The finest edit of more than 200 international luxury brands</li>
            <li>900 new arrivals each week directly from the runway</li>
            <li>Well-curated selection of items for a boutique-like shopping experience</li>
            <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
          </ul>
        </VStack>
        <VStack >
          <Text>A LUXURY SHOPPING EXPERIENCE</Text>
          <ul style={{fontSize:"3"}}>
            <li>The finest edit of more than 200 international luxury brands</li>
            <li>900 new arrivals each week directly from the runway</li>
            <li>Well-curated selection of items for a boutique-like shopping experience</li>
            <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
          </ul>
        </VStack>
        
      </HStack>
        <Box fontSize={13} m="auto" mt={2} w="90%">
      <p>
      Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.
      </p>
      </Box>
      <Box fontSize={13} m="auto" mt={2} w="90%">
      <p>
      Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.
      </p>
      </Box>
      </Box>
    </>
  )
}

export default Men