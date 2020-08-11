import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getImageFromApi } from "../api/movies";
import styled from "styled-components";
import moment from 'moment';
import numeral from "numeral";
import Loader from "../components/Loader";
import { getFilmDetailsFromApi } from "../api/movies";
import defaultImage from "../defaultImage.png";


const CustomLabel = styled.span`
    /* font-family: "Montserrat"; */
    /* font-weight: bold; */

`
const FilmTiTle = styled.h1`
    /* font-weight: bold; */
    /* font-family: Montserrat; */
`
const SynopsisTitle = styled.h2`
    /* font-family: "Montserrat"; */
    margin-top: 20px;
`

export default function FilmDetails (props) {
    const [ loading, setLoading ] = useState(true); 
    const [ film, setFilm ] = useState(undefined);



    const FilmId = props.match.params.id;

    useEffect( () => {
        getFilmDetailsFromApi(FilmId).then(data => {
            setFilm(data)
            setLoading(false)
        })
    },[FilmId]);


    const renderLoader = (loading) => {
        if(loading === true) {
            return <Loader />
        } else {
            return;
        }
    } 

    const renderFilm = () => {
        if (film) {
            return(
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img src={ film.backdrop_path ? getImageFromApi(film.backdrop_path) : defaultImage } alt={film.title} />
                    </div>
                    <div className="col-md-6">
                        <FilmTiTle>{film.title}</FilmTiTle>
                        <div>
                            <CustomLabel>Genres </CustomLabel>
                            {film.genres.map(genre => genre.name).join(" / ")} 
                        </div>
                        <div>
                            <CustomLabel>Sortie </CustomLabel>  
                            {moment(film.release_date, "YYYYMMDD").format("DD/MM/YYYY")} 
                        </div>
                        <div>
                            <CustomLabel>Titre original </CustomLabel> 
                            {film.original_title}
                        </div>
                        <div>
                            <CustomLabel>Budget </CustomLabel> 
                            {numeral(film.budget).format('0,0')} $
                        </div>
                    </div>
                    <div className="col-12">
                        <SynopsisTitle>Synopsis</SynopsisTitle>
                        <p>{film.overview}</p> 
                    </div>
                </div>
            )
        }
    }

    return(
        <>
           <Navbar /> 
           {renderLoader(loading)}
            <div className="container">
                {renderFilm()}
            </div>
            
           
        </>
    )
}