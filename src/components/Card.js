import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle }  from "reactstrap";
import { getImageFromApi } from "../api/movies";
import styled from "styled-components";
import theme from "../theme";
// import { Link } from "react-router-dom"; 
// import { Link } from "react-router-dom"


const CardCustomContainer = styled.div`
    margin-top: 16px;
`

export default function CardCustom (props) {
    const image = getImageFromApi(props.movie.backdrop_path);
    const overviewWordsArray = props.movie.overview.split(" ");
    const overviewWordsArrayCuted = overviewWordsArray.filter((word, index) => index < 40 );
    const overview =  overviewWordsArrayCuted.join(" ");


    return(
        <CardCustomContainer className="container">
            <Card>
                <div className="row">
                    <div className="col-12 col-md-3 mt-1 mb-1">
                        <img top width="100%" src={image} alt={ props.movie.original_title} />   
                    </div>
                    
                    <CardBody className=" col-md-9 pt-0">
                            <CardTitle style={{fontWeight: "bold", fontFamily: "Montserrat", marginLeft: 10, marginRight: 10}}>{props.movie.title}</CardTitle>
                            <CardSubtitle style={{color: theme.colors.red, fontFamily: "open sans", marginLeft: 10, marginRight: 10}}>Sortie: {props.movie.release_date}</CardSubtitle>
                            <CardText style={{fontFamily: "open sans", marginLeft: 10, marginRight: 10}}>{overview}...</CardText>
                    </CardBody>
                </div>
            </Card>
        </CardCustomContainer>
    )
}