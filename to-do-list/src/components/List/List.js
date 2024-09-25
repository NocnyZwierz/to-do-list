import { getAllColumns } from '../../redux/store';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import style from './List.module.scss';
import { useSelector } from 'react-redux';

const List = () => {

const columns = useSelector(getAllColumns);

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