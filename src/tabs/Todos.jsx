import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { nanoid } from 'nanoid';

import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const SAVED_TODOS = 'saved-todos';

  const [todos, setTodos] = useState(useLocalStorage(SAVED_TODOS, []));
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    window.localStorage.setItem(SAVED_TODOS, JSON.stringify(todos));
  }, [todos]);

  function findTodo(text) {
    return todos.find(todo => todo.text === text);
  }

  const addTodo = text => {
    if (findTodo(text)) return;
    const newTodo = { id: nanoid(), text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const selectCurrentTodo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const updateTodo = text => {
    if (findTodo(text)) return;
    const updatedTodo = { ...currentTodo, text: text };
    const updatedTodos = todos.map(todo => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <Form onSubmit={addTodo} />
      ) : (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          selectCurrentTodo={selectCurrentTodo}
        />
      ) : (
        <Text textAlign="center">There are no todos ...</Text>
      )}
    </>
  );
};

export default Todos;
