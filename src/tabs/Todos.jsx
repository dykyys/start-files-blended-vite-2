import { EditForm, Text, TodoList } from 'components';
import { Form } from 'components';

import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoEdit,setTodoEdit] = useState(null);
  const addTodoo = newTodo => {
    setTodos(prevtodos => {
      return [...prevtodos, newTodo];
    });
  };

  const selectToDo = id=>{
    setTodoEdit(todos.find(todo => todo.id === id))
    }

  const removeToDo = id => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  };

  const handlerCancel = () => {
    setTodoEdit(null);
  }
  const editToDo =(updateText) => {
    const index = todos.findIndex(todo => todo.id === todoEdit.id);
    const newToDo ={id:todoEdit.id , text:updateText};
    setTodos(prevTodos=> prevTodos.toSpliced(index,1, newToDo));
    handlerCancel();
  }

  return (
    <>
      {todoEdit !== null ? <EditForm defaultValue={todoEdit.text} handlerCancel={handlerCancel} editToDo={editToDo}/> :  <Form onSubmit={addTodoo} />}
           {todos.length !== 0 ? (
        <TodoList cards={todos} onRemove={removeToDo} selectToDo={selectToDo}/>
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
