import { TodoForm, Text } from 'components';

export const Todos = () => {
  const addTodo = ({ text }) => {
    console.log(text);
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
