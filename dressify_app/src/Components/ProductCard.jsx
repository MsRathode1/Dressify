import { Box, Image, Icon, Badge, StarIcon, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { FaEuroSign, FaShoppingCart } from "react-icons/fa"
import { useNavigate } from "react-router"
// import { CartContext } from "../Context/Cart/CartContext"
// import { addtocart } from "../Context/Cart/Action"

function ProductCard({ pro, id, url, productname, productprice, avl, productdetails }) {

  // let { state, dispatch } = useContext(CartContext)
  // console.log(dispatch);
  let navigate = useNavigate()
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={url} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          {avl ? <Badge borderRadius='full' px='2' colorScheme='teal'  >
            Availablity
          </Badge> : <Badge borderRadius='full' px='2' colorScheme='red'>
            Out OF Stock
          </Badge>}
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {productname}
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {productdetails}
        </Box>

        <Box fon>
          <Icon pt={1} as={FaEuroSign}></Icon>{productprice}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>

          <Box as='span' ml='0' color='gray.600' fontSize='sm'>
            <Button onClick={() => {
              // dispatch(addtocart(pro))
              //  return(navigate("Cart")
              // )
            }} bg="black" _hover={{ color: "white", bg: "gray" }} color="White"><Icon mr={2} as={FaShoppingCart}></Icon>Add To Cart</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
