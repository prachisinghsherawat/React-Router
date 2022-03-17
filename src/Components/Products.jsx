import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {

    const [data,setData] = useState([]);
    useEffect( ()=>{ getData()} ,[])

    const getData = () => {

        axios.get("http://localhost:2028/products").then( (res) =>{
            setData([...res.data])
        })
    }
    console.log(data)

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {data.map( (el) => (

                    <tbody>
                        <td>{el.id}</td>
                        <td>{el.name}</td>                         
                        <td>{el.price}</td>
                        <Link id="link" to = {`${el.id}`}>More Details</Link>
                    </tbody>

                ) )}

            </table>
           
        </div>
    )
}