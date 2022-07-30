import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './style.module.css';

const MoviesList = () => {

    const {movies, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovies());
    }, [dispatch]);

    return (
        <div className={css.wrapper}>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)
            }
        </div>
    )
}

export {
    MoviesList
}