import style from './Lists.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import ListForm from '../ListForm/ListForm';

const Lists = () => {

const lists = useSelector(getAllLists);
    return (
        <section className={style.lists}>
          <h2 className={style.heading}>Browse lists</h2>
          {lists.map(list => (
            <Link key={list.id} to={`/list/${list.id}`} className={style.listLink}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </Link>
          ))}
        <ListForm/>
        </section>
        
    );
};

export default Lists;