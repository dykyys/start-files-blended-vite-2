import css from './TodoListItem.module.css';
import { Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
export const TodoListItem = ({ onEdit, text, index, onDelete }) => {
  return (
    <div className={css.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <button className={css.deleteButton} type="button" onClick={onDelete}>
        <RiDeleteBinLine size={24} />
      </button>

      <button className={css.editButton} type="button" onClick={onEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
