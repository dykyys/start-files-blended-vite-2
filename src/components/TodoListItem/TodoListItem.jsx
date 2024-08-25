import { Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({ id, text, index, onRemove, selectToDo }) => {
  const handleRemove = () => {
    onRemove(id);
  };

  const handleEdit = () => {
    selectToDo(id);
  };
  
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={handleRemove}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>


      <button onClick={handleEdit} className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
