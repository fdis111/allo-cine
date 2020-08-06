import React, { useState, useEffect  }  from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Loader from "../components/Loader";
// import Error from "../components/Errors";
// import Data from "../shared/moviesData";
import { getFilmsFromApiWithSearchedText } from "../api/movies"; 




export default function Films () {

    const [ films, setFilms ] = useState(null);
    const [ textSeach, setTextSearch ] =  useState("");
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    // const [ error, setError ] = useState(false);

    const hadleTextSeach = async(e) => {
        try {
            if (e.key === "Enter") {
                if (textSeach.length >= 2) {
                    setLoading(true);
                    const results = await getFilmsFromApiWithSearchedText(textSeach, page);
                    setFilms(results)
                    setLoading(false);
                }
                
            } else{
                return setTextSearch(e.target.value);
            }
        } catch (error) {
            console.log(error);
        //    return setError(true);
        }
    }


    const renderLoader = (loading) => {
        if(loading === true) {
            return <Loader />
        } else {
            return;
        }
    } 

    // const renderError = (error) => {
    //     if(error === true) {
    //     return (
    //         <Error error="Probleme de connexion internet" />
        
    //     )
    //     } else {
    //         return;
    //     }
    // }

    const renderMovies = () => {
        if (films != null) {
            return (
                films.results.map( film => {
                   return <Card key={film.id} movie={film} />
                })
            )
        } else {
            return ;
        }
    };


    return(
        <div>
          
            <Navbar 
                onChange={ hadleTextSeach } 
                value={ textSeach } 
                onKeyDown={ hadleTextSeach }
            />
            {/* { renderError(error)} */}
            {renderLoader(loading)}
            {renderMovies()}
            
        </div>
    )
}