import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleChange = evt => {
    setText(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!text) {
      alert('Enter some value');
      return;
    }
    addTodo(text);

    setText('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          onChange={handleChange}
          value={text}
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  );
};
