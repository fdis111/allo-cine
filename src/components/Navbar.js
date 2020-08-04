import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";
import SearchButton from "./SearchButton"
import Logo from "./Logo";
// import { Fade } from "reactstrap";
import CustomInput from "./Input";



const Navbar = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.grey};
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 24px;
`
const NavbarContainer = styled.div`
    
    background-color: ${theme.colors.blue};
`;

export default function Navigation () {

    const [inputSearchDisplay, setInputSearchDisplay] = useState("none");

    const toggle = () => {
        if(inputSearchDisplay === "none"){
            setInputSearchDisplay("block");
        } else if(inputSearchDisplay ==="block") {
            setInputSearchDisplay("none");
        }
    }

    return(
        <>
            <NavbarContainer>
                <Navbar className="container">
                    <Logo />
                   <SearchButton onClick={toggle} /> 
                </Navbar>
            </NavbarContainer>
            <CustomInput display={inputSearchDisplay} />
        </>
    )
}