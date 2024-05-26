import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';
export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handeleChange = ev => {
    setText(ev.target.value);
  };
  const handeleSubmit = ev => {
    ev.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form className={style.form} onSubmit={handeleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        value={text}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handeleChange}
      />
    </form>
  );
};
