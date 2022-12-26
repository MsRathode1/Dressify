import React from 'react'
import { Flex, Image, Stack, VStack, Text, Heading, Button, HStack, Spacer, Divider, Box } from "@chakra-ui/react"
import { useNavigate } from "react-router"


const Women = () => {
  let navigate = useNavigate()
  return (
    <>
      <Stack w={["100%", "100%", "80%"]} m="auto" mt="10px">
        <Box w={["100%", "100%", "100%"]}>
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Bottega_Act_Big_Desktop_x2_20221109094851.jpg?imwidth=1180&imdensity=1'></Image>
        </Box>
      </Stack>
      <VStack border="0px solid red" p={[10, 10, 10]} bg="#F6F6F6" w={["100%", "100%", "80%"]} m="auto" mt="10" >
        <Text fontFamily="Arial, Helvetica, sans-serif">DON'T MISS OUT</Text>
        <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} letterSpacing="-0.33px">New Arrivals</Heading>
        <Text fontSize={["16px", "16px", "24px"]} fontFamily="Arial, Helvetica, sans-serif">The Attico, Melissa Odabash, Oséree, Hunza G...</Text>
        <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} onClick={
          () => {
            return navigate("WomenProducts")
          }
        } px="25px" color="white">SHOP NOW</Button>
      </VStack>
      <HStack dir='column' m="auto" mt={10} justifyContent="space-between" w={["95%", "95%", "80%"]} border="0px solid black" >
        <VStack border="0px solid black" w="40%">
          <Text fontSize={["10px", "10px", "15px"]} fontFamily="Arial, Helvetica, sans-serif">THE EXCLUSIVE CAPSULE COLLECTION</Text>
          <Heading fontFamily="Arial, Helvetica, sans-serif" fontSize={["35px", "35px", ""]} fontWeight={2} >Roger Vivier x Mytheresa</Heading>
        </VStack>
        <VStack border="0px solid black" w="40%" >
          <Text fontSize={["10px", "10px", "15px"]} fontFamily="Arial, Helvetica, sans-serif" textAlign="center">LIFE'S LITTLE LUXURIES</Text>
          <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} fontSize={["35px", "35px", ""]} textAlign="center">Mytheresa presents Gucci Décor</Heading>
        </VStack>
      </HStack>
      <HStack border="0px solid black" w={["95%", "95%", "80%"]} margin="auto" mt={["10", "10", "10"]} justifyContent="space-between" justify="flex-start">
        <VStack mt={["-60", "-60", "0"]} border="0px solid black">
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Actbox_Tall_Small_2x_20221107113119.jpg?imwidth=600&imdensity=1' />
          <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
        </VStack>
        <Flex direction="column"  >
          <VStack mt={["0", "0", -25]} border="0px solid black" >
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxSmall-GucciDecor_2x_20221107113141.jpg?imwidth=600&imdensity=1"
            />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>

          </VStack>
          <VStack mt={160} border="0px solid black">
            <Text fontFamily="Arial, Helvetica, sans-serif">FAMILY FESTIVITIES  </Text>
            <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2}>Embrace festive family moments</Heading>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Festive-Nov_ActboxSmall_Family_2x_20221107113245.jpg?imwidth=600&imdensity=1"
            />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
          </VStack>
        </Flex>
      </HStack>
      <Divider bg="gray.400" w="80%" m="auto" h={0.5} mt={10} orientation='horizontal' />
      <HStack m="auto" mt={10} justifyContent="space-between" w="80%" border="0px solid black" >
        <VStack border="0px solid black" w="40%">
          <Text fontFamily="Arial, Helvetica, sans-serif">THE PERFECT GIFT</Text>
          <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2}>THE PERFECT GIFT</Heading>
        </VStack>
        <VStack border="0px solid black" w="40%" >
          <Text fontFamily="Arial, Helvetica, sans-serif" textAlign="center">SPORTY STYLES FOR SNOWY SETTINGS</Text>
          <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} textAlign="center">The Ski Edit</Heading>
        </VStack>
      </HStack>
      <HStack border="0px solid black" justifyContent="space-between" w="80%" m="auto" mt={10}>
        <VStack border="0px solid black" h={960} justifyContent="space-between" >
          <VStack>
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/14_ActivityBoxes/Fixes/MonclerCover/Festive-Nov_ActboxSmall_GiftHER_1x_20221109142023.jpg' />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
          </VStack>

          <VStack >
            <Text>THE IT-BAG EDIT</Text>
            <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} textAlign="center" >New styles to add to your collection</Heading>
            <Image pt={10} src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_ActboxSmall_2x_20221107113353.jpg?imwidth=600&imdensity=1' />
            <Button bg="black" borderRadius="none" _hover={{ bg: "black" }} px="25px" color="white">SHOP NOW</Button>
          </VStack>
        </VStack>
        <VStack  >
          <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxTall-SKIEDIT_2x_20221107113331.jpg?imwidth=600&imdensity=1' />
        </VStack>
      </HStack>

      <Divider bg="gray.400" w="80%" h={0.9} m="auto" mt={90} />
      <VStack m="auto" mt={20}>
        <Text alignItems="center">IT'S A MATCH</Text>
        <Heading fontFamily="Arial, Helvetica, sans-serif" fontWeight={2} alignItems="center">Cozy textures and warm tones</Heading>
      </VStack>
      <HStack border="0px solid black" w="80%" m="auto" mt={50} >
        <VStack border="0px solid black">
          <Box p={10}>
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x__20221107113403.jpg' />
            <Text mt={2} textAlign="center">Jacquemus</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box p={10}>
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_2_20221107113403.jpg' />
            <Text mt={2} textAlign="center">Jacquemus</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box p={10}>
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_3_20221107113404.jpg' />
            <Text mt={2} textAlign="center">Jacquemus</Text>
          </Box>
        </VStack>
        <VStack border="0px solid black">
          <Box p={10}>
            <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_4_20221107113403.jpg' />
            <Text mt={2} textAlign="center">Jacquemus</Text>
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
            <ul style={{ fontSize: "3" }}>
              <li>The finest edit of more than 200 international luxury brands</li>
              <li>900 new arrivals each week directly from the runway</li>
              <li>Well-curated selection of items for a boutique-like shopping experience</li>
              <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
            </ul>
          </VStack>
          <VStack >
            <Text>A LUXURY SHOPPING EXPERIENCE</Text>
            <ul style={{ fontSize: "3" }}>
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

export default Women