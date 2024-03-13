import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
export const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { text } = form.elements;
    updateTodo(defaultValue.id, text.value);

    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        defaultValue={defaultValue.text}
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
      />
    </form>
  );
};
