import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos(prev => [...prev, { text, id: nanoid() }]);
  };
  const deleteTodo = id => {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
