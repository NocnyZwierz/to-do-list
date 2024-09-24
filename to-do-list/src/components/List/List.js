import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import style from './List.module.scss';
import { useSelector } from 'react-redux';

const List = () => {

// useState do odświeżania i renderowania nowoprzybyłych obiektów bez tego to doda się do tablicy ale nie wyświetli
const columns = useSelector(state => state.columns);

    return (
        <div>
            <header className= {style.header}>
                <h2 className={style.title}>Things to do <span>soon!</span></h2>
            </header>
            <p className={style.description}>Interesting things I want to check out</p>
            <section className={style.columns}>
                {columns.map(column => (
                    <Column
                    key={column.id}
                    {...column}
                    
                    />
                ))}
                </section>
            <ColumnForm />
        </div>
    );
};

export default List;