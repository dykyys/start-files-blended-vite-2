import { Text } from 'components';
import { Form } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodoo = evt => {
    evt.preventDefault();
    const text = evt.target.elements.search.value;
    evt.target.reset();
    //console.log(text);
    const newTodo = { text, id: nanoid() };
    //console.log(newTodo);
    setTodos(prevtodos => {
      return [...prevtodos, newTodo];
    });
  };
  console.log(todos);

  return <Form onSubmit={addTodoo} />;
  // <Text textAlign="center">There are no any todos ...</Text>;
};
