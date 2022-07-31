import {axiosService} from "./axios.service";
import {urls} from "../constants";

const __accessTokenKey = 'access';

const authService = {
    getAllMovies: (movies) => axiosService.post(urls.movies),
    getAllGenres: (genres) => axiosService.post(urls.genres),

    setToken: ({access}) => {
        localStorage.setItem(__accessTokenKey, access);
    },

    deleteTokens: () => {
        localStorage.removeItem(__accessTokenKey);
    },

    getAccessToken: () => {
        localStorage.getItem(__accessTokenKey);
    }
}

export {
    authService
}