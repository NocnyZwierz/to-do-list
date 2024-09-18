import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import style from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form className={style.searchForm}>
            <TextInput placeholder='Search...'/>
            <Button>
                <span className="fa fa-search"></span>
            </Button>
            {/* wystarczy wpisać co chcemy */}
        </form>
    );
};

export default SearchForm;