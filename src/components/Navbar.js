import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";
import SearchButton from "./SearchButton"
import Logo from "./Logo";
// import { Fade } from "reactstrap";
// import CustomInput from "./Input";
import Searchbar from "./Searchbar";


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
    /* box-shadow: 3px 4px 7px #B1B1B1; */
    /* position: fixed;
    width: 100%;
    z-index:100;
    top: 0;
    left: 0;
     */
`;

export default function Navigation ( props ) {


    const { value, onChange, onSubmit } = props;

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
            <Searchbar
                display={inputSearchDisplay}
                value={ value }
                onChange={ onChange }
                onSubmit={onSubmit}
            />
        </>
    )
}