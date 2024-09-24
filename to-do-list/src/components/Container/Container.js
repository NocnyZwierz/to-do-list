import style from './Container.module.scss';

const Container = props => {
    return (
        <div className={style.container}>{props.children}</div>//skup się na tym co robisz w środku zawsze jest props children
    );
};

export default Container;