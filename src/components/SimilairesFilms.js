import React, {useState, useEffect } from 'react'
import { getSimalarFilmsFromApi } from "../api/movies";
import defaultImage from "../defaultImage.png";
import Card from "../components/Card"


export default function SimilairesFilms({FilmId}) {

    const [similarFilms, setSimilarFilms] = useState([]);

    useEffect( () => {
        return getSimalarFilmsFromApi(FilmId).then(data => {
            setSimilarFilms(data.results);
            console.log(data);
        })
    }, [FilmId])

    const renderPopularFims = () => {
        if (similarFilms.length) {
            similarFilms.map(film => {
                return <Card key={film.id} movie={film} />
            })
        } else{
            return null
        }
    }

    

    return (
        <div className="row">
            { renderPopularFims() }
        </div>
    )
}
