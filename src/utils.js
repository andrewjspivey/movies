

export const getMoviesByName = async (search, page=1, type) => {
    const baseUrl = 'https://www.omdbapi.com'
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const url = `${baseUrl}/?apikey=${apiKey}&s=${search}&page=${page}${type ? `&type=${type}` : ''}`
    
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const getMovieDetailsById = async (movieId) => {
    const baseUrl = 'https://www.omdbapi.com'
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const url = `${baseUrl}/?apikey=${apiKey}&i=${movieId}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const truncate = (str, len = 10) => {
    return `${str.substring(0, len)}...`
}