import { Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ id, text, index, onRemove }) => {
  const handleRemove = () => {
    onRemove(id);
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
    </div>
  );
};
