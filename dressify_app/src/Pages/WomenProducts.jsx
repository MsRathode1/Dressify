import { Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import {Get_Data_women} from "../Redux/action"

const WomenProducts = () => {
  const store = useSelector((store=>store.women))
  console.log("store: ", store);
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(Get_Data_women)
  },[])

  return (
    <>
    <Grid w="80%" m="auto" mt={10} templateColumns='repeat(3, 1fr)' gap={5}>
    {store.map((el)=>{
        return <GridItem><ProductCard pro={el} id={el.id} url={el.url} productname={el.product_name} price={el.price} avl={el.availablity} productdetails={el.product_details}/></GridItem>
      })}
      
    </Grid>
      
    </>
  )
}

export default WomenProducts