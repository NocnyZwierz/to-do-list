import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import style from './Column.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
    const cards = useSelector(state => getFilteredCards(state, props.id));
    const dispatch = useDispatch();

    const handleToggleFavorite = (cardId) => {
        dispatch({type: 'TOGGLE_CARD_FAVORITE', payload: cardId})
    }
    return (
        <article className={style.column}>
            <span className={style.icon + ' fa fa-' + props.icon} />
            <h2 className={style.title}>{props.title}</h2>
            <ul className={style.cards}>
                {cards.map(card => 
                    <Card
                        key={card.id}
                        title={card.title}
                        isFavorite={card.isFavorite} 
                        toggleFavorite={() => handleToggleFavorite(card.id)}
                    />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );
};

export default Column;