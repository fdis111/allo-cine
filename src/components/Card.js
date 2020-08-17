import React from "react";
import { Link } from "react-router-dom";
import { getImageFromApi } from "../api/movies";
import styled from "styled-components";
// import theme from "../theme";
// import moment from 'moment';
import defaultImage from "../defaultImage.png";

const CardCustomContainer = styled.div`
   margin-bottom: 20px;
   background: none;
`
const CardBodyCustom = styled.div`
    padding-left: 0;
    padding-right: 0;
`

export default function CardCustom (props) {
    const image = props.movie.poster_path ? getImageFromApi(props.movie.poster_path) : defaultImage;
    const overviewWordsArray = props.movie.overview.split(" ");
    const overviewWordsArrayCuted = overviewWordsArray.filter((word, index) => index < 50 );
    const overview =  overviewWordsArrayCuted.join(" ");


    return(
        <CardCustomContainer className="col-md-3">
            <Link to={`/filmdetails/${props.movie.id}`}>
                <div className="card" >
                        <div classNane="card-image col-md-3">
                            <figure className="figurefx pushup">
                                <img src={ image } alt={props.movie.title} />
                                <figcaption>
                                    <h2 className="card-title">{props.movie.title}</h2>
                                    <hr />
                                    {overview}
                                </figcaption>
                                <CardBodyCustom className="card-body pl-3 pr-3">
                            <h2 className="card-title">{props.movie.title}</h2>
                        </CardBodyCustom>
                            </ figure>
                        </div>        
                        {/* <CardBodyCustom className="card-body">
                            <h2 className="card-title">{props.movie.title}</h2>
                        </CardBodyCustom> */}
                </div>
            </Link>
        </CardCustomContainer>
    )
}