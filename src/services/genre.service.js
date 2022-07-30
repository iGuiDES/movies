import {axiosService} from "./axios.service";

import {urls} from "../constants";

const genreService = {
    getGenres: () => axiosService.get(urls.genres)
}

export {
    genreService
}