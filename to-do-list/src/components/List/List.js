import Column from '../Column/Column';
import style from './List.module.scss';

const List = () => {
    return (
        <div>
            <header className= {style.header}>
                <h2 className={style.title}>Things to do <span>soon!</span></h2>
            </header>
            <p className={style.description}>Interesting things I want to check out</p>
            <section className={style.columns}>
                <Column icon="book" title="Books"/>
                <Column icon="film" title="Movies"/>
                <Column icon="gamepad" title="Games"/> 
                {/* tutu problem z umieszczeniem w odpowiednim miejscu ikony, muszę nad tym pomyśleć chuba chodzi o sam css */}
            </section>
        </div>
    );
};

export default List;