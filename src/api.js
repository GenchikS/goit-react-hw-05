import axios from 'axios'

const API_KEY = `c70ac1a23ae822ab5b2881638ada5783`

// перевірка сторінки API
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

const options = {
    headers: {
    // Замість api_read_access_token вставте свій токен
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzBhYzFhMjNhZTgyMmFiNWIyODgxNjM4YWRhNTc4MyIsIm5iZiI6MTcyNTg3NzE2My45NTY3MzEsInN1YiI6IjY2ZGQ0Mjc2NDBmYmMxMDk4YjM4YmM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pQmKKpdO-Y0EqH4ywzQg9OjejwsSrLYwHE46q3YkgKM'
    }
  };

export const collectionsFilms = async ()=> {
    const response = axios.get(url, options)
    .then(response => {return response.data.results})
    .catch(err => console.error(err))
    return response;
}


export const filmId = async (paramsId)=> {
  // console.log("paramsId", paramsId)
  // console.log("paramsId.movieId", paramsId.movieId) 
  const response = axios.get(`https://api.themoviedb.org/3/movie/${paramsId.movieId}?api_key=${API_KEY}`)
  .then(response =>{
    // console.log("response", response);
    return response.data})
    // response.data.
    // backdrop_path})
  .catch(err => console.error(err))
  return response;
}


export const castFilms = async(paramsId)=>{
  // console.log("paramsId", paramsId)
    const response = axios.get(`https://api.themoviedb.org/3/movie/${paramsId.movieId}/credits?api_key=${API_KEY}`)
    .then(response=> {
      // console.log("response", response.data.cast);
      return response.data.cast})
      .catch(err => console.error(err))
      return response;  
}


export const reviewsFilms = async(paramsId)=>{
  // console.log("paramsId", paramsId)
    const response = axios.get(`https://api.themoviedb.org/3/movie/${paramsId.movieId}/reviews?api_key=${API_KEY}`)
    .then(response=> {
      // console.log("response", response.data.results);
      return response.data.results})
      .catch(err => console.error(err))
      return response;  
}

export const searchFilm = async (query) => {
  // console.log("query", query);
  const response = axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
  .then((response) => {
      // console.log("response", response);
      return response;
    })
    .catch((err) => console.error(err));
  return response;
};