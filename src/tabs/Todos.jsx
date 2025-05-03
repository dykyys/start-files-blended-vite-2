import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addNewTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length == 0 ? (
        <Text textAlign="center">There are no any todos ...</Text>
      ) : (
        <TodoList todos={todos} onDelete={handleDelete} />
      )}
    </>
  );
};

export default Todos;
