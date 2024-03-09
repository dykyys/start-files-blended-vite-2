import { TodoForm, Text, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ text }) => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prevState => [...prevState, newTodo]);
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <TodoList array={todos} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
