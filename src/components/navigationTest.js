import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";
import SearchButton from "./SearchButton"
import Logo from "./Logo";
// import { Fade } from "reactstrap";
// import CustomInput from "./Input";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalBody, ModalHeader, FormGroup, Form, Input, Label } from "reactstrap";


// const Navbar = styled.div`
//     display: flex;
//     height: 60px;
//     align-items: center;
//     justify-content: space-between;
//     color: ${theme.colors.grey};
//     font-family: 'Open Sans', sans-serif;
//     font-weight: bold;
//     font-size: 24px;
// `
// const NavbarContainer = styled.div`
    
//     background-color: ${theme.colors.blue};
// `;

export default function Navigation ( props ) {


    const { value, onChange, onSubmit } = props;

    const [inputSearchDisplay, setInputSearchDisplay] = useState("none");
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggle = () => {
        if(inputSearchDisplay === "none"){
            setInputSearchDisplay("block");
        } else if(inputSearchDisplay ==="block") {
            setInputSearchDisplay("none");
        }
    }


    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    // return(
    //     <>
    //         <NavbarContainer>
    //             <Navbar className="container">
    //                 <Logo />
    //                <SearchButton onClick={toggle} /> 
    //             </Navbar>
    //         </NavbarContainer>
    //         <Searchbar
    //             display={inputSearchDisplay}
    //             value={ value }
    //             onChange={ onChange }
    //             onSubmit={onSubmit}
    //         />
    //     </>
    // )

    return(
        <>
                <Navbar dark fixed expand="md" >
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"> 
                            My movies
                        </NavbarBrand>
                        <NavbarToggler className="fa fa-facebook" onClick={toggleNav} />
                        <Collapse isOpen={isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home" >
                                        {/* <span className="fa fa-home fa-lg"></span> */}
                                        Dernièrs sorties
                                    </ NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/aboutus" >
                                        {/* <span className="fa fa-info fa-lg"></span> */}
                                        Les plus vues
                                    </ NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/menu" >
                                        {/* <span className="fa fa-list fa-lg"></span> */}
                                        
                                    </ NavLink>
                                </NavItem>
                            </Nav>
                            <nav className="ml-auto" navbar>
                                <Input />
                            </nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
    )
}