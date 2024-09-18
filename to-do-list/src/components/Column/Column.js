import style from './Column.module.scss'

const Column = props => {
    return (
        <article className={style.column}>
            {/* <span className={`${style.icon} fa fa-${props.icon}`} /> */}
            <span className={style.icon + ' fa fa-' + props.icon} />
            <h2 className={style.title}>{props.title}</h2>
        </article>
    );
};

export default Column;