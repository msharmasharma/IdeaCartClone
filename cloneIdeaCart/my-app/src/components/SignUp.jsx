import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const SignUp = ()=>{
   

        const history = useNavigate()
    
        const [ user, setUser] = useState({
            name:"",
            mobile:"",
            email:"",
            password:"",
            rePassword:"",
            
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }
    
        const register = () => {
            const { name, mobile, email, password, rePassword  } = user
            if( name && mobile && email && password && (rePassword===password)  ){
                axios.post("http://localhost:8080/register", user)
                .then( res => {
                    alert(res.data.message)
                    history("/SignIn")
                })
            } else {
                alert("invlid input")
            }
            
        }
      
    
        return (
            <div className="register">
                <div style={{textAlign:"left",marginLeft:"10%"}} className="divone">
                <h4 style={{ fontSize: "30px" }}>Sign up</h4>
                    {console.log("User", user)}
                    <div className="label">
                        <label style={{ fontSize: "25px" }} className="label" >Name</label><br/>
                        <input  style={{ width: "60%", height: "30px" }} type="text" name="name" value={user.name} onChange={handleChange}></input><br/><br/>
                        <label style={{ fontSize: "25px" }} className="label" >Mobile Number</label><br/>
                        <input  style={{ width: "60%", height: "30px" }} type="text" name="mobile" value={user.mobile} onChange={handleChange}></input><br/><br/>
                        <label style={{ fontSize: "25px" }} className="label" htmlFor="">Email address</label><br/>
                        <input  style={{ width: "60%", height: "30px" }} type="text" name="email" value={user.email}  onChange={ handleChange }></input><br/><br/>
                        <label style={{ fontSize: "25px" }} className="label" htmlFor="">Password</label><br/>
                        <input  style={{ width: "60%", height: "30px" }} type="password" name="password" value={user.password}  onChange={ handleChange }></input><br/><br/>
                        <label style={{ fontSize: "25px" }} className="label" htmlFor="">Password Confirmation</label><br/>
                        <input  style={{ width: "60%", height: "30px" }} type="password" name="rePassword" value={user.rePassword}  onChange={ handleChange }></input>
                    </div>
                    <div className="ticbox" style={{display : "flex"}}>
                    </div>
                    <br/>
                    <div  style={{
            border: "1px solid green",
            width: "60px",
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            height: "30px",
            borderRadius: "3px",
            paddingTop: "6px",
          }} className="button signup" onClick={register} >Sign up</div>
                    <br/>
                    <div style={{ color: "blue" }} className="button log" onClick={() => history("/")}>Login</div>
    
                   
                </div>
    
                
                
            </div>
        )
}
