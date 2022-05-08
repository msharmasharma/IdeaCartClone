import React, {useState} from "react"
import styled from "styled-components"
import axios from "axios"
import{ useNavigate } from "react-router-dom"

export const SignIn = ()=>{

    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8080/login", user)
            .then(res => {
                alert(res.data.message)
                // setLoginUser(res.data.user)
                console.log(res.data.user)
                console.log(res.data.message)
                if(res.data.message === "Login Successfull"){
                    history("/products")
                }else{
                    history("/SignIn")
                }
                

            })
    }
        const SignUpDiv = styled.div`display:grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 10%;
        `
        
    return (
        <div className="login">
            <h2>Log in</h2>
            <SignUpDiv className="divone">
                
                <div className="labell"> 
                    <label htmlFor="">Email</label>&ensp;
                    <input type="text" name="email" value={user.email} onChange={handleChange} ></input>
                    &ensp; &ensp; &ensp; &ensp;
              &ensp; &ensp; &ensp;&ensp; &ensp; 
                    <label htmlFor="">Password</label>&ensp;
                    <input type="password" name="password" value={user.password} onChange={handleChange} ></input>
                </div>
                <div><span><input type="checkbox"></input></span>Remember me</div>
                <div className="button signin" onClick={login}>Log in</div>
               
                <div className="button registerr" onClick={() => history("/SignIn")}>Sign up</div>
                <div className="button registerr" >Forgot your Password?</div>
            </SignUpDiv>

            
           
        </div>
    )
    
}