import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCH', payload: inputValue });
    };

    return (
        <form className={style.searchForm} onSubmit={handleSubmit}>
            <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search...' />
            <Button>
                <span className="fa fa-search"></span>
            </Button>
        </form>
    );
};

export default SearchForm;