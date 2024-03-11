import { TodoForm, Text, TodoList, EditForm } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  const [isEditing, setIsEditing] = useState(true);
  const [currentTodo, setCurrentTodo] = useState({});
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
  const handelEditTodo = text => {
    setCurrentTodo(prevState => ({ ...prevState, text }));
    setIsEditing(!isEditing);
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(!isEditing);
  };
  return (
    <>
      {isEditing ? (
        <TodoForm onSubmit={addTodo} />
      ) : (
        <EditForm
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
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
