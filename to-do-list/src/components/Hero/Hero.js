import style from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={style.Hero}>
            <h1 className={style.title}>Myfirst React App</h1>
            <p className={style.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Hero;