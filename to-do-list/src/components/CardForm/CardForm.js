import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './CardForm.module.scss';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState ('');
    const addCard = e => {
        e.preventDefault();
        props.action({title: title}, props.columnId);
        setTitle('');
    };
    // odbieramy nasze action i id za pomocą props podobno typeScript ułataiw zabawę z tym
    return (
        <form className={style.cardForm} onSubmit={addCard}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;