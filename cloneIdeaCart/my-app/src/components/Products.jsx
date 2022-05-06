import axios from "axios"
import {useEffect,useState} from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Products = ()=>{
    const [products , setProducts] = useState([])

    useEffect(()=>{
        axios.get("https://ideakartitems.herokuapp.com").then(({ data }) => {
      setProducts(data);
    });
    },[])


    const Layout = styled.div`
        display: grid;
        width: 90%;
        height: auto;
        gap: 2%;
        grid-template-columns: repeat(4,23%);
        margin-left: 6%;
        row-gap: 1%;
        
    `
    const P = styled.p`
        text-align: left;
        margin-left: 6%;
        font-size: 24px;
        font-family: "Roboto";
    `

    return <div>
        <P>Top Reads</P>
        <Layout>
        {products.map((pro) => (
        <Link key={pro.id} to={`/products/${pro.id}`}>
            <div style={{border:"1px solid grey",height:"550px",borderRadius:"3px"}}>
                <div><img style={{width:"93%",height:"300px",marginTop:"4%"}} src={pro.image_url}/></div>
                <div>
                    <p style={{textAlign:"left",marginLeft:"12px",color:"black"}}>{pro.name}</p>
                    <p style={{textAlign:"left",marginLeft:"12px",color:"teal"}}>Rs. {pro.price}</p>
                    <hr/>
                    <span style={{color:"blue",marginRight:"10%"}}>View Now</span> | <span style={{color:"blue",marginLeft:"10%"}}>More Details </span>
                </div>
            </div>     
        </Link>
      ))}
       </Layout>
    </div>
}