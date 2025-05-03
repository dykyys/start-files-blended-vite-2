import style from './SearchBox.module.css';

export const SearchBox = ({ onInput }) => {
  return (
    <input className={style.input} onChange={e => onInput(e.target.value)} />
  );
};

export default SearchBox;
