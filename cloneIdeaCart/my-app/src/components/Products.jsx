import axios from "axios"
import {useEffect,useState} from "react"
import { Link } from "react-router-dom"
export const Products = ()=>{
    const [products , setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/products").then(({ data }) => {
      setProducts(data);
    });
    },[])

    console.log(products)
    return <div>
        <h1>List Of All The Products</h1>
        {products.map((pro) => (
        <Link key={pro.id} to={`/products/${pro.id}`}>
         <h1>{pro.id}-{pro.name}</h1> 
        </Link>
      ))}
    </div>
}