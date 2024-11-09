import { Form, Text } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos(prev => [...prev, { text, id: nanoid() }]);
  };
  console.log(todos);

  return (
    <>
      <Form onSubmit={addTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
