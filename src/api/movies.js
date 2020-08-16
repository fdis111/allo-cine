const API_TOKEN = "c4869b7c782298e267a863ca95b90e3b";


export const getFilmsFromApiWithSearchedText = async (text, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&page=1&query=${text}&page=${page}`;
    
    try {
        const response = await fetch(url);
        return  await response.json()
    } catch (error) {
        console.log(error) 
        
    }
}

export const getImageFromApi = (name) => {
    return `https://image.tmdb.org/t/p/w500${name}`;
}


export const getUpComingFilmsFromApi = async(page) => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_TOKEN}&language=fr&page=${page}`;
        try {
            const response = await fetch(url);
            return  await response.json()
        } catch (error) {
            console.log(error) 
            
        }
} 

export const getPopularFilmsFromApi = async(page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=${page}`;
    try {
        const response = await fetch(url);
        return  await response.json()
    } catch (error) {
        console.log(error) 
        
    }
}

export const getFilmDetailsFromApi =  (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`;

    // try {
    //     const response = await fetch(url);
    //     return await response.json();
    // } catch (error) {
    //     console.log(error)
    // }


    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error))
}