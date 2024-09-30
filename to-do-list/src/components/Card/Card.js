import style from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {
    return (
        <li className={style.card}>
            {props.title}
            <button onClick={props.toggleFavorite}>
            <i className={clsx('fa-regular fa-star', { [style.active]: props.isFavorite })}></i>
        </button>
        </li>
    )
}

export default Card;