import style from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Container>
                <div className={style.navContent}>
                    <div className={style.logo}>
                        <button className={style.menuButton}>
                            <span className="fa fa-tasks"></span>
                        </button>
                    </div>
                    <ul className={style.navLinks}>
                        <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/Favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? style.linkActive : undefined} to="/About">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;