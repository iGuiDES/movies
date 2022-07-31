import {axiosService} from "./axios.service";

import {urls} from "../constants";

const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies, {params: {page}}),
};

export {
    moviesService
}
