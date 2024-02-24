import { MdOutlineCancel } from 'react-icons/md';
import { RiSaveLine } from 'react-icons/ri';
import css from './EditForm.module.css';

export const EditForm = ({ updateTodo, cancel, defaultValue }) => {
  const handleSubmit = e => {
    e.preventDefault();
    updateTodo(e.target.text.value);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={css.editButton} type="button" onClick={cancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
