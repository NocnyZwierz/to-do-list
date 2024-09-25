import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import style from './Column.module.scss';
import { useSelector } from 'react-redux';

const Column = (props) => {
    const searchString = useSelector(state => state.searchString.toLowerCase());
    const cards = useSelector(state => 
        state.cards.filter(card => 
            card.columnId === props.id && card.title.toLowerCase().includes(searchString)
        )
    );

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