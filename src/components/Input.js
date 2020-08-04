import React from "react";
// import { Input } from "reactstrap";
import styled from "styled-components";


const CustomInputContainer = styled.div`
    display: ${props => props.display}
`
const Input = styled.input`
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
    font-size: 17px; 

`

export default function CustomInput( props ){
    return(
        <CustomInputContainer className="container mt-2" display={props.display}>
            <Input
                placeholder= {"Rechercher un film"} 
            />
        </CustomInputContainer>
    )
}