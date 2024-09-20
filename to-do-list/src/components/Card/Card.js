import style from './Card.module.scss';

const Card = props => {
    return (
        <li className={style.card}>{props.title}</li>
    )
}

export default Card;