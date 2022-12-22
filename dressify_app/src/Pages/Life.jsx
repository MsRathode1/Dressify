import React from 'react'
import {Stack,Box,HStack,VStack,Text,Image,Heading,Button,Flex,Divider} from "@chakra-ui/react"
export const Life = () => {
  return (
    <>
      <Stack  w="80%" m="auto" mt="10px">
      <Box >
      <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW45/Big_Gucci-Decor-desktop_2x_20221107085555.jpg?imwidth=1180&imdensity=1'></Image>
      </Box>
      </Stack>

      <HStack m="auto" mt={10} justifyContent="space-between" w="80%" border="0px solid black" >
        <VStack border="0px solid black" w="40%">
          <Text fontFamily="Arial, Helvetica, sans-serif">CHRISTIAN LOUBOUTIN'S LOUBI FAMILY</Text>
          <Heading textAlign="center" fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} >Elegant accents for loyal companions</Heading>
        </VStack>
        <VStack border="0px solid black" w="40%" >
          <Text fontFamily="Arial, Helvetica, sans-serif" textAlign="center">SHOP BY ROOM</Text>
          <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} textAlign="center">Distinctive dining room staples</Heading>
        </VStack>
      </HStack>
      <HStack border="0px solid black" w="80%" margin="auto" mt={10} justifyContent="space-between" justify="flex-start">
        <VStack border="0px solid black">
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW44/LoibiFamily_ActTall_2x_20221031104100.jpg?imwidth=600&imdensity=1' />
          <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
        </VStack>
        <Flex direction="column"  >
          <VStack mt={-25} border="0px solid black" >
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW45/CW45_ActboxSmall_2x_20221107090137.jpg?imwidth=600&imdensity=1"
            />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>

          </VStack>
          <VStack mt={160} border="0px solid black">
            <Text fontFamily="Arial, Helvetica, sans-serif">DESIGNER DECORATIONS  </Text>
            <Heading textAlign="center" fontFamily="Arial, Helvetica, sans-serif" fontWeight={2}>Illuminate your home with festive décor
</Heading>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW45/Festive-Nov_ActboxSmall_Decor_2x_20221107100859.jpg?imwidth=600&imdensity=1"
            />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
          </VStack>
        </Flex>
      </HStack>
     
     
      
      <Divider bg="gray.400" w="80%" h={0.9} m="auto" mt={90}/>
      <VStack m="auto" mt={20}>
      <Text alignItems="center">PERFECT YOUR PALETTE</Text>
      <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} alignItems="center">Pastels are having a moment</Heading>
      </VStack>
      <HStack  border="0px solid black"  w="80%" m="auto" mt={50} >
        <VStack border="0px solid black"> 
        <Box p={10}>
        <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW44/CW44_FE_642x642_2x__20221031103426.jpg'/>
        <Text mt={2} textAlign="center">Jacquemus</Text>
        </Box>
        </VStack>
        <VStack border="0px solid black"> 
        <Box p={10}>
        <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW44/CW44_FE_642x642_2x_2_20221031103427.jpg'/>
        <Text mt={2} textAlign="center">Missoni</Text>
        </Box>
        </VStack>
        <VStack border="0px solid black"> 
        <Box p={10}>
        <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW44/CW44_FE_642x642_2x_3_20221031103427.jpg'/>
        <Text mt={2} textAlign="center">Vitra</Text>
        </Box>
        </VStack>
        <VStack border="0px solid black"> 
        <Box p={10}>
        <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW44/CW44_FE_642x642_2x_4_20221031103427.jpg'/>
        <Text mt={2} textAlign="center">Nuove Forme</Text>
        </Box>
        </VStack>
      </HStack>
      <Box w="80%" m="auto">
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
export default Life