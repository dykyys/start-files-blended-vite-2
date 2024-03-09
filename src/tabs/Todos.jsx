import { TodoForm, Text, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)));

  const addTodo = ({ text }) => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prevState => [...prevState, newTodo]);
  };
  const deletTodo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList array={todos} deletTodo={deletTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
