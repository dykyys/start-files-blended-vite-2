import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const text = evt.target.elements.search.value;
    evt.target.reset();

    const newTodo = { text, id: nanoid() };
    onSubmit(newTodo);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
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
