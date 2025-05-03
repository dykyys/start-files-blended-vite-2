import toast from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (searchValue.trim() === '') {
      toast.error('Please input text');
      return;
    }
    onSubmit(searchValue);
    event.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
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

export default Form;
