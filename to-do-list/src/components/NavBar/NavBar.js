import style from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Container>
                <div className={style.navContent}>
                    <div className={style.logo}>
                        <button className={style.menuButton}>
                            <span className="fa fa-bars"></span>
                        </button>
                    </div>
                    <ul className={style.navLinks}>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Favorite">Favorite</a></li>
                        <li><a href="About">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;