import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"


export const ProductDetails = () => {

    const {id}  = useParams()
    const [res,setRes]  = useState({})
    useEffect( () => {getData()},[])

    const getData = () => {

        axios.get(`http://localhost:2028/products/${id}`).then( (res) => {setRes(res.data)})
    } 
    return(

       <div>
            <h1>WELCOME TO PRODUCT DETAILS PAGE : {id} </h1>

            <div className="sidebar">
            <img id="img" src={res.avatar} alt="" />
            <div>
            <h2>{res.name}</h2>
            <h3> Rs. {res.price}</h3>
            </div>
            </div>
       </div>
       
       

    )
}