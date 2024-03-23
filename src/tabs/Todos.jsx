import { Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const toDo = {
      text,
      id: nanoid(),
    };
    setTodos([...todos, toDo]);
  };
  return (
    <>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};
