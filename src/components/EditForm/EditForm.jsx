import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
export const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  return (
    <form className={style.form}>
      <button
        className={style.submitButton}
        type="submit"
        onSubmit={updateTodo}
      >
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        value={defaultValue.text}
        // onChange={evt =>
        //   setCurrentTodo({ ...currentTodo, text: evt.target.value })
        // }
        placeholder="What do you want to write?"
        name="text"
        required
        //defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
