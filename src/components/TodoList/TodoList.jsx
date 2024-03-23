import { Grid, GridItem, TodoListItem } from '..';
export const TodoList = ({ todos, deleteToDo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => {
        return (
          <GridItem key={todo.id}>
            <TodoListItem
              id={todo.id}
              text={todo.text}
              count={index + 1}
              deleteToDo={deleteToDo}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};
