import { getColumnsByList, getListById  } from '../../redux/store';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import style from './List.module.scss';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
    const { id } = useParams() 
    const columns = useSelector(state => getColumnsByList(state, id));
    const listData = useSelector(state => getListById(state, id));
  
    if (!listData) return <Navigate to="/" />;
    return (
      <div>
        <header className={style.header}>
          <h2 className={style.title}>{listData.title}</h2>
        </header>
        <p className={style.description}>{listData.description}</p>
        <SearchForm/>
        <section className={style.columns}>
          {columns.map(column => (
            <Column key={column.id} {...column} />
          ))}
        </section>
        <ColumnForm listId={id}/>
      </div>
    );
  };
  
  export default List;