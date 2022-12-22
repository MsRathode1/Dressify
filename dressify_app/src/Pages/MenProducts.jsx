import { Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {Get_Data_men} from "../Redux/action.js"
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'

const MenProducts = () => {

  const store = useSelector((store=>store.mens))
  const dispatch= useDispatch()
// console.log(store);

  useEffect(()=>{
    dispatch(Get_Data_men)
  },[])

  return (
    <>
    <Grid w="80%" m="auto" mt={10} templateColumns='repeat(3, 1fr)' gap={5}>
    {store.map((el)=>{
        return <GridItem><ProductCard pro={el} id={el.id} url={el.url} productname={el.product_name} productprice={el.product_price} avl={el.availablity} productdetails={el.product_details}/></GridItem>
      })}
      
    </Grid>
      
    </>
  )
}

export default MenProducts