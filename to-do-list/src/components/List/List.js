import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import style from './List.module.scss';
import { useState } from 'react';
import shortid from 'shortid';

const List = () => {

// useState do odświeżania i renderowania nowoprzybyłych obiektów bez tego to doda się do tablicy ale nie wyświetli
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: 'Books',
            icon: 'book',
            cards: [
                { id: 1, title: 'This is Going to Hurt' },
                { id: 2, title: 'Interpreter of Maladies' }
            ]
        },
        {
            id: 2,
            title: 'Movies',
            icon: 'film',
            cards: [
                { id: 1, title: 'Harry Potter' },
                { id: 2, title: 'Star Wars' }
            ]
        },
        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
            cards: [
                { id: 1, title: 'The Witcher' },
                { id: 2, title: 'Skyrim' }
            ]
        }
    ]);
    const addColumns = newColumn => {
        setColumns([...columns, {id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: []}]);
    };
    const addCard = (newCard, columnId) => {
        const columnUpdated = columns.map(column => {
            if (column.id === columnId) 
                return {...column, cards: [...column.cards, { id: shortid(), title: newCard.title}]}
            else
                return column
        })
        setColumns(columnUpdated);
    };
    return (
        <div>
            <header className= {style.header}>
                <h2 className={style.title}>Things to do <span>soon!</span></h2>
            </header>
            <p className={style.description}>Interesting things I want to check out</p>
            <section className={style.columns}>
                {columns.map(column => (
                    <Column
                    action={addCard} // nasz funkcja i id kolumny
                    id={column.id}
                    key={column.id}
                    title={column.title}
                    icon={column.icon}
                    cards={column.cards}
                    
                    />
                ))}
                </section>
            <ColumnForm action={addColumns}/>
        </div>
    );
};

export default List;