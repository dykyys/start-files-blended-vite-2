import { Form, TodoList } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = text => {
    const isExsistToDo = todos.find(
      todo => todo.text.toLowerCase() === text.toLowerCase(),
    );
    if (isExsistToDo) {
      alert(`todo ${text} already exsist`);
      return;
    }

    const toDo = {
      text,
      id: nanoid(),
    };
    setTodos([...todos, toDo]);
  };

  const deleteToDo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteToDo={deleteToDo} />
    </>
  );
};
