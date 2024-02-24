import { useState } from 'react';
import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    setTodos([
      ...todos,
      {
        text: text,
        id: nanoid(),
      },
    ]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  return (
    <>
      <Form onSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList todosArray={todos} onDelete={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
