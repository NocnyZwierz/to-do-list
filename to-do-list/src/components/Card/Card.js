import style from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {
    return (
        <li className={style.card}>
            {props.title}
            <button 
                className={clsx('fa', { 'fa-star-o': !props.isFavorite, 'fa-star': props.isFavorite })} 
                onClick={props.toggleFavorite}
            />
        </li>
    )
}

export default Card;