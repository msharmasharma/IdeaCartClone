import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
//user login
  const login = () => {
    axios.post("http://localhost:8080/login", user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user)
      console.log(res.data.user);
      console.log(res.data.message);
      if (res.data.message === "Login Successfull") {
        history("/products");
      } else {
        history("/SignIn");
      }
    });
  };


  return (
    <div
      style={{ marginLeft: "10%", textAlign: "left", marginBottom: "10%" }}
      className="login"
    >
      <h2 style={{ fontSize: "30px" }}>Log in</h2>
      <div className="divone">
        <div className="labell">
          <label style={{ fontSize: "25px" }} htmlFor="">
            Email
          </label>
          &ensp;
          <br />
          <input
            style={{ width: "60%", height: "30px" }}
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label style={{ fontSize: "25px" }} htmlFor="">
            Password
          </label>
          &ensp;
          <br />
          <input
            style={{ width: "60%", height: "30px" }}
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <span>
            <input type="checkbox"></input>
            <br/>
          </span>
          Remember me
        </div>
        <br/>
        <div
          style={{
            border: "1px solid green",
            width: "60px",
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            height: "30px",
            borderRadius: "3px",
            paddingTop: "6px",
          }}
          className="button signin"
          onClick={login}
        >
          Log in
        </div>
        <br/>
        <div
          style={{ color: "blue" }}
          className="button registerr"
          onClick={() => history("/SignIn")}
        >
          Sign up
        </div>
        <div style={{ color: "blue" }} className="button registerr">
          Forgot your Password?
        </div>
      </div>
    </div>
  );
};
