import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);

    useEffect(() => {
        setInputValue(searchString);
    }, [searchString]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(inputValue));
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