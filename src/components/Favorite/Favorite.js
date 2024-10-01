import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import style from './Favorite.module.scss'

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    if (favoriteCards.length === 0) {
        return <Navigate to="/" />;
    }
    return (
        <section>
            <PageTitle>Favorite</PageTitle>
            <ul className={style.favotiteUl}>
                {favoriteCards.map(card => (
                    <Card className={style.favoriteCard} key={card.id} title={card.title} isFavorite={card.isFavorite} />
                ))}
            </ul>
        </section>
    );
};

export default Favorite;