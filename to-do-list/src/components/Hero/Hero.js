import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <h1 className={styles.title}>Myfirst React App</h1>
            <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Hero;