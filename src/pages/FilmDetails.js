import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getImageFromApi } from "../api/movies";
import styled from "styled-components";
import moment from 'moment';
import numeral from "numeral";
import Loader from "../components/Loader";
import Card from "../components/Card"
import { getFilmDetailsFromApi, getSimalarFilmsFromApi } from "../api/movies";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";
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

const FilmDetailContainer =  styled.div`
    /* margin-top: 70px; */
`

export default function FilmDetails (props) {
    const [ loading, setLoading ] = useState(true); 
    const [ film, setFilm ] = useState(undefined);
    const [similarFilms, setSimilarFilms] = useState([]);



    const FilmId = props.match.params.id;

    useEffect( () => {
        getFilmDetailsFromApi(FilmId).then(data => {
            setFilm(data)
            setLoading(false)
        });
        getSimalarFilmsFromApi(FilmId).then(data => {
            setSimilarFilms(data.results);
            // console.log(data);
        })
    },[FilmId]);


    // useEffect( () => {
    //     getSimalarFilmsFromApi(FilmId).then(data => {
    //         setSimilarFilms(data.results);
    //         console.log(data);
    //     })
    // }, [FilmId])

    console.log(similarFilms);

    const renderPopularFims = () => {
        if (similarFilms.length > 0) {
            similarFilms.map(film => {
                return <Card key={film.id} movie={film} />
            })
        } else{
            return null
        }
    }

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
                <FilmDetailContainer>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <img src={ film.poster_path ? getImageFromApi(film.poster_path, 300) : defaultImage } alt={film.title} />
                        </div>
                        <div className="col-md-9">
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
                            <div>
                                <SynopsisTitle>Synopsis</SynopsisTitle>
                            <p>{film.overview}</p> 
                        </div>
                    </div>
                    </div>
                </FilmDetailContainer>
            )
        }
    }

    return(
        <>
           <Navbar /> 
           {renderLoader(loading)}
            <div className="container">
            {/* <button type="button" class="btn btn-primary mt-3" data-toggle="button" aria-pressed="false">
                Single toggle
            </button> */}

                   <div className="col-md-3 mt-3 pl-0">
                    <Breadcrumb className="ml-0">
                            <BreadcrumbItem><Link to="/">Films</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Film details</BreadcrumbItem>
                        </Breadcrumb>
                   </div>
                {renderFilm()}
                <div className="row">
                    {renderPopularFims()}
                </div>
            </div>
            
           
        </>
    )
}