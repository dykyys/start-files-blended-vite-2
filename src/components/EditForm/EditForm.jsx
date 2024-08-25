import { RiSaveLine } from 'react-icons/ri';
import style from "./EditForm.module.css"
import { MdOutlineCancel } from 'react-icons/md';

export const EditForm = ({defaultValue , handlerCancel, editToDo}) => {

  const handlerSubmit = (evt)=>{
    evt.preventDefault()
    editToDo(evt.target.elements.text.value)
    evt.target.reset();
      }

  return <form className={style.form} onSubmit={handlerSubmit}>
    <button className={style.submitButton} type="submit" >
      <RiSaveLine color="green" size="16px" />
    </button>

    <button className={style.editButton} type="button" onClick={handlerCancel}>
      <MdOutlineCancel color="red" size="16px" />
    </button>

    <input
      className={style.input}
      placeholder="What do you want to write?"
      name="text"
      required
      defaultValue={defaultValue}
      autoFocus
    />
  </form>
};
