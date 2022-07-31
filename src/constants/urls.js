import {APIKey} from "./apikey";

const baseURL = 'https://api.themoviedb.org/';

const urls = {
    movies: '/3/discover/movie/',
    genres: '/genre/movie/list'
}

const linkImages = 'https://www.themoviedb.org/t/p/w1280/'

export {
    baseURL,
    urls,
    linkImages
}