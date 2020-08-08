import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle }  from "reactstrap";
import { Link } from "react-router-dom";
import { getImageFromApi } from "../api/movies";
import styled from "styled-components";
import theme from "../theme";
import moment from 'moment';

const CardCustomContainer = styled.div`
    /* :hover{
        box-shadow: 2px 4px silver;
    } */
`

export default function CardCustom (props) {
    const image = getImageFromApi(props.movie.backdrop_path);
    const overviewWordsArray = props.movie.overview.split(" ");
    const overviewWordsArrayCuted = overviewWordsArray.filter((word, index) => index < 40 );
    const overview =  overviewWordsArrayCuted.join(" ");


    return(
        <CardCustomContainer className="container mt-3 ">
            <Link to={{pathname:`/filmdetails/${props.movie.title}`, state: {FilmID: props.movie.id}}} >
                <Card>
                    <div className="row">
                        <div className="col-12 col-md-3 mt-1 mb-1">
                            <img top width="100%" src={image} alt={ props.movie.original_title} />   
                        </div>
                        
                        <CardBody className=" col-md-9 pt-0">
                                <CardTitle tag="h1"  style={{ fontWeight: 600, fontSize: 24 , marginLeft: 10, marginRight: 10}}>{props.movie.title}</CardTitle>
                                <CardSubtitle style={{color: theme.colors.red, fontFamily: "open sans", marginLeft: 10, marginRight: 10}}>Sortie: {moment(props.movie.release_date, "YYYYMMDD").format("DD/MM/YYYY")}</CardSubtitle>
                                <CardText style={{fontFamily: "open sans", marginLeft: 10, marginRight: 10}}>{overview}...</CardText>
                        </CardBody>
                    </div>
                </Card>
            </Link>
        </CardCustomContainer>
    )
}