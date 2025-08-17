import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';

const TodoListItem = ({ todo, number, deleteTodo, selectCurrentTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{number}
      </Text>
      <Text>{todo.text}</Text>

      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deleteTodo(todo.id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => selectCurrentTodo(todo)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
