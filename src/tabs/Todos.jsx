import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TodoList from '../components/TodoList/TodoList';
import { useState } from 'react';
import EditForm from '../components/EditForm/EditForm';
import SearchBox from '../components/SearchBox/SearchBox';

const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const [filter, setFilter] = useState('');

  const handleInput = value => {
    setFilter(value);
  };

  const toggleEdit = todo => {
    setIsEditing(!isEditing);
    setCurrentTodo(todo);
  };

  const addNewTodo = text => {
    if (findTodo(text)) {
      toast.error('You already have the same todo');
      return;
    }

    setTodos([...todos, { text, id: nanoid() }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  const onEdit = text => {
    if (findTodo(text)) {
      toast.error('You already have the same todo');
      return;
    }

    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo
      )
    );

    setIsEditing(!isEditing);
    setCurrentTodo({});
  };

  const cancelEdit = () => {
    setIsEditing(!isEditing);
    setCurrentTodo({});
  };

  const findTodo = text => {
    return todos.find(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  const filtersdTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          onEdit={onEdit}
          onCancel={cancelEdit}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      {todos.length > 0 && <SearchBox onInput={handleInput} />}

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}

      {filtersdTodos.length === 0 && todos.length !== 0 ? (
        <Text textAlign="center">There are no todos with your search ...</Text>
      ) : (
        <TodoList
          todos={filtersdTodos}
          onDelete={handleDelete}
          toggleEdit={toggleEdit}
          isEditing={isEditing}
        />
      )}
    </>
  );
};

export default Todos;
