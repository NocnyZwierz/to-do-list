import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState ('');

    
    const addCard = e => {
        e.preventDefault();
        dispatch(addCard({ title }, props.columnId));
        setTitle('');
    };
    return (
        <form className={style.cardForm} onSubmit={addCard}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;