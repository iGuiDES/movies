import {axiosService} from "./axios.service";

import {urls} from "../constants";

const moviesService = {
    getMovies: () => axiosService.get(urls.movies),
};

export {
    moviesService
}
