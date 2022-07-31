import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './style.module.css';

const MoviesList = () => {

    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}));
    }, [dispatch, query]);


    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`});
    };

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`});
    };

    console.log(next);

    return (
        <div className={css.wrapper}>
            <div>
                <button disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>
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