import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import css from './style.module.css';

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovies());
    }, [dispatch]);

    return (
        <div className={css.wrapper}>
            <div className={css.cards}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    )
}

export {
    MoviesList
}