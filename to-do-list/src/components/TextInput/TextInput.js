import style from './TextInput.module.scss';

const TextInput = props => {
    return (
        <input className={style.input} placeholder={props.placeholder} type='text' />
    );
};

export default TextInput;