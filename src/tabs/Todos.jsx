import { TodoForm, Text, TodoList, EditForm } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)));

  const findTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  const addTodo = ({ text }) => {
    if (findTodo(text)) {
      alert('This Todo already exists');
      return;
    }

    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prevState => [...prevState, newTodo]);
  };

  const deletTodo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const handelEditTodo = ({ id, text }) => {
    setCurrentTodo({ id, text });
    setIsEditing(true);
  };

  const cancelUpdate = () => {
    setCurrentTodo({ currentTodo });
    setIsEditing(false);
  };

  const updateTodo = (id, updatedText) => {
    if (findTodo(updatedText)) {
      alert('This Todo already exists');
      return;
    }
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, text: updatedText } : todo,
      ),
    );
    setCurrentTodo({});
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo}
        />
      ) : (
        <TodoForm onSubmit={addTodo} />
      )}
      {todos.length > 0 ? (
        <TodoList
          array={todos}
          deletTodo={deletTodo}
          handelEditTodo={handelEditTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
