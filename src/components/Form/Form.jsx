import { FiSearch } from 'react-icons/fi';
import css from './Form.module.css';
import toast from 'react-hot-toast';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    if (!value) {
      return toast.error("This input can't be empty!!");
    }
    onSubmit(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
    </form>
  );
};
