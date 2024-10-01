import PageTitle from '../PageTitle/PageTitle';
import style from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={style.Hero}>
            <PageTitle>Myfirst React App</PageTitle>
            <p className={style.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Hero;