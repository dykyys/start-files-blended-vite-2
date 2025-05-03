import Text from '../Text/Text';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const TodoListItem = ({ text, count, id, onDelete }) => {

  const handleDelete = (id) => {
    onDelete(id);
  }

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button onClick={() => handleDelete(id)} className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
