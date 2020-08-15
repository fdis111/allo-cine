import React, { useState, useEffect }  from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Loader from "../components/Loader";
// import Error from "../components/Errors";
// import Data from "../shared/moviesData";
import { getFilmsFromApiWithSearchedText, getUpComingFilmsFromApi } from "../api/movies"; 
import PaginationComponent from "react-reactstrap-pagination";




export default function Films () {

    const [ films, setFilms ] = useState([]);
    const [ textSeach, setTextSearch ] =  useState("");
    const [ page, setPage ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ totalResults, setTotalResults ] = useState(0);
    const [ totalPage , setTotalPage ] = useState(0)
    // const [ selectedPage, setSelectedPage] = useState(0)
    // const [ error, setError ] = useState(false);

    const hadleTextSeach = (e) => {
        return setTextSearch(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        fetchFilms();
    }

    const renderLoader = (loading) => {
        if(loading === true) {
            return <Loader />
        } else {
            return;
        }
    } 

    const renderMovies = () => {
        if (films.length > 1) {
            return (
                films.map( film => {
                   return <Card key={film.id} movie={film} />
                })
            )
        } else {
            return ;
        }
    };

    const fetchFilms = async () => {
        try {
            setLoading(true);
            const results = await getFilmsFromApiWithSearchedText(textSeach, page + 1);
            setPage(results.page);
            setTotalResults(results.total_results);
            setTotalPage(results.total_pages)
            setFilms(results.results);

            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }



    
    useEffect(() => {
        setPage(0);
        // setFilms([]);
        setTotalResults(0);
    }, [textSeach])

    const renderPagination = () => {
        if (totalResults > 20) {
            return(
                <PaginationComponent
                    firstPageText="Début"
                    lastPageText="Fin"
                    previousPageText="Précedent"
                    nextPageText="Suivant"
                    size="md"
                    totalItems={totalResults}
                    pageSize={20}
                    onSelect={handleSelected}
                    maxPaginationNumbers={0}
                /> 
            )
        }
    }

    const handleSelected = async(selectedPage) => {
        try {
            setLoading(true);
            const results = await getFilmsFromApiWithSearchedText(textSeach, selectedPage);
            setPage(results.page);
            // setTotalPage(results.total_pages);
            setFilms(results.results);

            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchUpcommingFilms();
    },[])

    const fetchUpcommingFilms = async() => {
        try {
            setLoading(true);
            const results = await getUpComingFilmsFromApi(page + 1);
            console.log(results);
            setFilms(results.results);
            setLoading(false);
        } catch (error) {
            console.log(error) 
            
        }
    }
        

    // async function fetchData() {
    //     // You can await here
    //     const response = await fetch(url);
    //     const results = await response.json();
    //   }

    return(
        <div>
          
            <Navbar 
                onSubmit = { hadleSubmit }
                value={ textSeach } 
                onChange={  hadleTextSeach }
            />
            <div className="container mt-3">
                <h4>{totalResults ? `${totalResults} resultats trouvés pour ${textSeach}`: null}</h4>
                
                <p>{ page > 0 ? `Page ${page} / ${totalPage}` : null}</p>
            </div>
            
            {renderLoader(loading)}
            {renderMovies()}
            <div className="container mt-3">
                {renderPagination()} 
            </div>
            
        </div>
    )
}