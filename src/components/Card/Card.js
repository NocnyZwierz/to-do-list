import style from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {
    return (
        <li className={style.card}>
            {props.title}
            <span className={style.span}>

            <button onClick={props.toggleFavorite}>
            <i className={clsx('fa-regular fa-star', { [style.active]: props.isFavorite })}></i>
            </button>
            {
                props.deleteCard && <button onClick={props.deleteCard}>
                    <i className={clsx('fa-solid fa-trash',  style.trash)}></i>
                </button>
            }
            </span>
        </li>
    )
}

export default Card;