import { Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ id, text, count, deleteToDo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deleteToDo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
