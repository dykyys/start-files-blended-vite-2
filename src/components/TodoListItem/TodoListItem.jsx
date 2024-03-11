import { Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({
  id,
  text,
  count,
  deletTodo,
  handelEditTodo,
}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        {count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deletTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => handelEditTodo(text)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
