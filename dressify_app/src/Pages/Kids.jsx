import { HStack,Text, Box, Image, Stack, Button, VStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Kids = () => {
  return (
    <>
      <HStack m="auto" mt={5} w="80%">
        <Box>
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW43/Kids_Homepage_Festive_Girls_Desktop_2x_20221021105900.jpg?imwidth=1180&imdensity=1' />
        </Box>
        <Box>
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW43/Kids_Homepage_Festive_Boys_Desktop_2x_20221021105854.jpg?imwidth=1180&imdensity=1' />
        </Box>
      </HStack>

      <Stack w="80%" m="auto" mt={10}>
        <VStack mt={130} ml={550} pos="absolute">
          <Heading mt={-50} >
            Baby
          </Heading>
          <Spacer />
          <Button bg="black" color="white" borderRadius="none" mt={10} >Shop Now</Button>
        </VStack>

        <Image src='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_November/Homepage_Kids_BabyBanner_desktop_2x_20221103093127.jpg?imwidth=1180&imdensity=1' />
      </Stack>
      <HStack w="80%" m="auto" mt={20}>
        <VStack>
          <Box >
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/CW44_PB_Skiwear_Image_20221108081623.jpg' />
          </Box>
          <Button borderRadius="none" color="black" bg="white" pos="absolute" mt={-50}>Shop Now</Button>
        </VStack>
        <VStack >
          <Box>
            <Image  src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/LoibiFamily_PB_KW_Image_20221031164331.jpg' />
          </Box>
          <Button  borderRadius="none"  pos="absolute" bg="white">Shop Now</Button>
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

export default Kids