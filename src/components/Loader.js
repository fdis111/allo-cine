import React from 'react';
import { Spinner } from 'reactstrap';
import styled from "styled-components";
import theme from "../theme";

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    /* z-index: 5; */
`

export default function Loader() {
    return (
        <LoaderContainer className="container">
            <Spinner color="primary" />
        </LoaderContainer>
    )
}