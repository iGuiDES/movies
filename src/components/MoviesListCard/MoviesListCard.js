import {linkImages} from "../../constants";

import css from './style.module.css';

const MoviesListCard = ({movie}) => {

   const {title, poster_path} = movie;

    return (
        <a className={css.card} href={'details'}>
            <img className={css.posterImages} src={`${linkImages}${poster_path}`} alt={title} />
            <div>{title}</div>
        </a>
    )
}

export {
    MoviesListCard
}

