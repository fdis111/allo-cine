import React from 'react';
import styled from "styled-components";
import theme from "../theme";

const ErrorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    z-index: 5;
`

export default function Loader(props) {
    const { error } = props
    return (
        <ErrorsContainer className="container">
           <p>{error}</p> 
        </ErrorsContainer>
    )
}