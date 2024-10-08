import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './ColumnForm.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState ('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
        setTitle('');
        setIcon ('');
    };
    return (
        <form className={style.columnStyle} onSubmit={handleSubmit}>
            Title: <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)}/>
            Icon: <TextInput type='text' value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>ADD COLUMN</Button>
        </form>
    );
};

export default ColumnForm;