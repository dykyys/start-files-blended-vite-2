import { Text, TodoList } from 'components';
import { Form } from 'components';

import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodoo = newTodo => {
    setTodos(prevtodos => {
      return [...prevtodos, newTodo];
    });
  };

  const removeToDo = id => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  };
  return (
    <>
      <Form onSubmit={addTodoo} />
      {todos.length !== 0 ? (
        <TodoList cards={todos} onRemove={removeToDo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
