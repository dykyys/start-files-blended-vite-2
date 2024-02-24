import { useEffect, useState } from 'react';
import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';

const getData = () => {
  const savedTodos = window.localStorage.getItem('todos');
  if (!savedTodos) {
    return [];
  } else {
    return JSON.parse(savedTodos);
  }
};

export const Todos = () => {
  const [todos, setTodos] = useState(getData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const getCurrentTodo = todoId => {
    setIsEditing(true);

    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) return;
    setCurrentTodo(todo);
  };

  const addTodo = text => {
    setTodos([
      ...todos,
      {
        text: text,
        id: nanoid(),
      },
    ]);
  };

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleForm = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const editTodo = text => {
    const newTodo = {
      ...currentTodo,
      text,
    };

    setTodos(todos.map(todo => (todo.id === newTodo.id ? newTodo : todo)));
    toggleForm();
  };

  return (
    <>
      {!isEditing ? (
        <Form onSubmit={addTodo} />
      ) : (
        <EditForm
          defaultValue={currentTodo.text}
          cancel={toggleForm}
          updateTodo={editTodo}
        />
      )}
      {todos.length > 0 ? (
        <TodoList
          todosArray={todos}
          onDelete={deleteTodo}
          onEdit={getCurrentTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
