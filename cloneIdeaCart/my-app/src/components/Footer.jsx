import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = ()=>{

    const FooterDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(1);
    margin-top: 4%;
    text-align: left;
    margin-left: 60%;
    `

    return <FooterDiv>
        <p>Get To Know Us</p>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/privacy"><li>Privacy Policy</li></Link>
        <Link to="/return"><li>Return Policy</li></Link>
        <Link to="/earn"><li>Earn Money Online</li></Link>
    </FooterDiv>
}