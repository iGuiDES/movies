import {APIKey} from "./apikey";

const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: `/discover/movie/${APIKey.apikey}`,
    genres: `genre/movie/list/${APIKey.apikey}`
}

const linkImages = 'https://www.themoviedb.org/t/p/w1280/'

export {
    baseURL,
    urls,
    linkImages
}