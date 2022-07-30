import css from './style.module.css';
import {linkImages} from "../../constants";

const MoviesListCard = ({movie}) => {

   const {title, poster_path} = movie;

    return (
        <a className={css.card} href={'details'}>
            <div>
                <img className={css.posterImages} src={`${linkImages}${poster_path}`} alt={title} />
            </div>
            <div>{title}</div>
        </a>
    )
}

export {
    MoviesListCard
}