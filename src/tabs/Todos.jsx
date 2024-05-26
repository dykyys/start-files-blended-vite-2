import { Text, Form } from 'components';
import { nanoid } from 'nanoid';
export const Todos = () => {
  const handleSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    console.log(todo);
  };
  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
