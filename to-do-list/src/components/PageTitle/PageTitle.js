import style from './PageTitle.module.scss';

const PageTitle = props => {
    return (
        <h1 className={style.title}>{props.children}</h1>
    );
};

export default PageTitle;