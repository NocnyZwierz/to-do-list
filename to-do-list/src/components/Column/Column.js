import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import style from './Column.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
    // const searchString = useSelector(state => state.searchString.toLowerCase());
    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={style.column}>
            <span className={style.icon + ' fa fa-' + props.icon} />
            <h2 className={style.title}>{props.title}</h2>
            <ul className={style.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );
};

export default Column;