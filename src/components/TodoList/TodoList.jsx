import { Grid, GridItem, TodoListItem } from '..';
export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => {
        return (
          <GridItem key={todo.id}>
            <TodoListItem id={todo.id} text={todo.text} count={index + 1} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
