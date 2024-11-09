import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const handleForm = e => {
    e.preventDefault();
    const inputText = e.target.elements.search.value.trim();

    onSubmit(inputText);
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleForm}>
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
  );
};
