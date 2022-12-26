import { Box, Stack, Image, Heading, Text, IconButton, Button, Icon, Divider } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { BsHeart } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import { useSelector } from 'react-redux'
import { useCart } from "react-use-cart"


const Cart = () => {

  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart()

  const store = useSelector((store)=>store.cart)
  


  return (
    <>
     <Box m="auto" mt={10} width="80%" h="fit-content" border="0px solid red">
       <Box w="100%" gap="30px"  display="flex" justifyContent="flex-end">
        <Box><Text fontFamily="bold" fontSize={17}>Price</Text></Box>
        <Box><Text fontFamily="bold" fontSize={17}>Quantity</Text></Box>
        <Box><Text fontFamily="bold" fontSize={17}>Subtotal</Text></Box>
       </Box>
       <Divider w="100%" mt={2} mb={2} bg="gray.900"   ></Divider>
       {store.length>0 && store.map((el)=>{
         return <Box  display="flex" mt={3} justifyContent="space-between" border="0px solid black" h="fit-content" w="100%">
         <Box gap={5} display="flex" w="60%" border="0px solid red" >
          <Box border="0px solid red" w="20%">
            <Image borderRadius={5} src={el.url}/>
          </Box>
          <Box border="0px solid brown" w="fit-content">
            <Text>{el.product_name}</Text>
            <Text>{el.product_details}</Text>
            <Box mt={16} gap={10} display="flex">
              <Button _hover={{bg:"none"}} bg="none"> <Icon mr={3} as={RxCross2}></Icon>Remove</Button>
              <Button _hover={{bg:"none"}} bg="none"><Icon mr={3} as={BsHeart}></Icon>Add to Wishlist</Button>
            </Box>
          </Box>
         </Box>
         <Box border="0px solid green" w="20%" display="flex" gap="65px" justifyContent="flex-end"  >
          <Text>{el.price}</Text>
          <Text>{el.quantity}</Text>
          <Text>{}</Text>
         </Box>
       </Box>
       })}
       <Box></Box>
     </Box>
    </>
  )
}

export default Cart