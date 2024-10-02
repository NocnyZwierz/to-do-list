import { useState } from "react"
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";
import style from "./ListForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={style.columnStyle} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>ADD LIST</Button>
        </form>
    );
};

export default ListForm;