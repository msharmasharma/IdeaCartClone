import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
                <div className="divone">
                <h4>Sign up</h4>
                    {console.log("User", user)}
                    <div className="label">
                        <label className="label" >Name</label>
                        <input type="text" name="name" value={user.name} onChange={handleChange}></input>
                        <label className="label" >Mobile Number</label>
                        <input type="text" name="mobile" value={user.mobile} onChange={handleChange}></input>
                        <label className="label" htmlFor="">Email address</label>
                        <input type="text" name="email" value={user.email}  onChange={ handleChange }></input>
                        <label className="label" htmlFor="">Password</label>
                        <input type="password" name="password" value={user.password}  onChange={ handleChange }></input>
                        <label className="label" htmlFor="">Password Confirmation</label>
                        <input type="password" name="rePassword" value={user.rePassword}  onChange={ handleChange }></input>
                    </div>
                    <div className="ticbox" style={{display : "flex"}}>
                    </div>
                    <div className="button signup" onClick={register} >Sign up</div>
                    
                    <div className="button log" onClick={() => history("/")}>Login</div>
    
                   
                </div>
    
                
                
            </div>
        )
}
