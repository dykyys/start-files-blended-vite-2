import { useState } from 'react';
import { Form, Text } from 'components';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    console.log(text);
    setTodos([
      ...todos,
      {
        text: text,
        id: nanoid(),
      },
    ]);
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
