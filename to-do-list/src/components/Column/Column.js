import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import style from './Column.module.scss'

const Column = props => {
    return (
        <article className={style.column}>
            <span className={style.icon + ' fa fa-' + props.icon} />
            <h2 className={style.title}>{props.title}</h2>
            <ul className={style.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.action} />
            {/* przekazujemy przez pośrednika używajać props.id i props.action i pchamy dalej do caedForm */}
        </article>
    );
};

export default Column;