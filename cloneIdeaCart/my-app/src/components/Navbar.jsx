import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Input";

export const Navbar = () => {
  const Nav = styled.div`
    display: flex;
    gap: 30px;
    font-size: 16px;
    width: 100%;
    height: 50px;
    background: #2874f0;
    font-family: "Roboto";

    input {
      width: 380px;
      height: 32px;
      margin-top: 8px;
      border-radius: 3px;
      border: none;
      padding-left: 15px;
      margin-left: 1.2%;
    }

    button {
      width: 60px;
      height: 34px;
      margin-top: 8px;
      margin-left: -.5%;
      background-color: white;
      border: none;
      border-left: 1px solid black;
      border-radius: 2px;
      :hover {
        background-color: #e0e0e0;
      }
    }
  `;

  const [inValue, setInValue] = useState("");
  console.log(inValue);

  const handleClick = () => {
    alert("hello");
  };
  return (
    <div>
      <Nav>
        <Link
          style={{
            color: "yellow",
            textDecoration: "none",
            marginTop: "15px",
            marginLeft: "7%",
            fontSize: "19px",
          }}
          to="/"
        >
          IDEAKART
        </Link>

        <Input />

        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "15px",
            marginLeft: "19%",
          }}
          to="/about"
        >
          About
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "15px" }}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "15px" }}
          to="/signin"
        >
          SignIn
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "15px" }}
          to="/signup"
        >
          SignUp
        </Link>
      </Nav>
    </div>
  );
};
