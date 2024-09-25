import Hero from '../Hero/Hero';
import List from '../List/List';
import SearchForm from '../SearchForm/SearchForm';
import style from './Home.module.scss';

const Home = props => {
    return (
        <div>
            <Hero/>
            <SearchForm/>
            <List/>
        </div>//skup się na tym co robisz w środku zawsze jest props children
    );
};

export default Home;