import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import style from './List.module.scss';
import { useState } from 'react';
import shortid from 'shortid';

const List = () => {

    const [columns, setColumns] = useState([ // useState do odświeżania i renderowania nowoprzybyłych obiektów bez tego to doda się do tablicy ale nie wyświetli
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad'},
    ]);

    const addColumns = newColumn => {
        setColumns([...columns, {id: shortid(), title: newColumn.title, icon: newColumn.icon}]);
    };

    return (
        <div>
            <header className= {style.header}>
                <h2 className={style.title}>Things to do <span>soon!</span></h2>
            </header>
            <p className={style.description}>Interesting things I want to check out</p>
            <section className={style.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
            </section>
            <ColumnForm action={addColumns}/>
        </div>
    );
};

export default List;