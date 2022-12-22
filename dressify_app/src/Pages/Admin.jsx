import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@chakra-ui/react'

const Admin = () => {
    let initstate = {
        product_name: "",
        product_details: "",
        product_price: "",
        availablity: false,
        url:""
    }
    let [product, setporduct] = useState(initstate)

    const AddWomenProduct = async () => {
        let result = await axios.post("http://localhost:4000/WomenProducts", product)
        console.log("result: ", result);
    }
    const AddKidsProduct = async () => {
        let result = await axios.post("http://localhost:4000/KidsProducts", product)
        console.log("result: ", result);
    }
    const AddMenProduct = async () => {
        let result = await axios.post("http://localhost:4000/MensProducts", product)
        console.log("result: ", result);
    }
    const AddLifeProduct = async () => {
        let result = await axios.post("http://localhost:4000/LifeProducts", product)
        console.log("result: ", result);
    }
    let Onchng = (e) => {
        let { value, name, type, checked } = e.target
        let val = type === "checkbox" ? checked : value
        setporduct({ ...product, [name]: val })
    }
    return (
        <>
            <div style={{ width: "80%", border: "1px solid black", margin: "auto", marginTop: "10px" }}>
                <input name='url' onChange={Onchng} placeholder='Image Url' />
                <input name='product_name' onChange={Onchng} placeholder='Product Name' /><br></br>
                <input name='product_details' onChange={Onchng} placeholder='Product Details' /><br></br>
                <input name='product_price' type="Number" onChange={Onchng} placeholder='Product Price' /><br></br>
                <input type="checkbox" name='availablity' onChange={Onchng} /><br></br>
                <Button onClick={AddWomenProduct}>Women</Button>
                <Button onClick={AddKidsProduct}>Kids</Button>
                <Button onClick={AddMenProduct}>Men</Button>
                <Button onClick={AddLifeProduct}>Life</Button>

            </div>
        </>
    )
}

export default Admin