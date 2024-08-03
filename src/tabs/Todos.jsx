import { Text } from 'components';
import { useState } from 'react';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    const text = e.target.search.value.trim();
    const newTodo = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, newTodo]);

    //     setTodos((prevTodos) => {
    //       return
    //         [...prevTodos, newTodo]
    // })
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={addTodo}></Form>
    </>
  );
};
