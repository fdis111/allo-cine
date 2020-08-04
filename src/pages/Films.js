import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Data from "../shared/moviesData";



export default function Films () {

    const renderMovies = (movies) => {
        if (movies != null) {
            return (
                movies.map( movie => {
                   return <Card key={movie.id} movie={movie} />
                })
            )
        }
    };
    return(
        <div>
            <Navbar />
            {renderMovies(Data.results)}
        </div>
    )
}