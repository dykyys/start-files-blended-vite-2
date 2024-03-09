import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ array, deletTodo, handelEditTodo }) => {
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            {...item}
            count={index + 1}
            deletTodo={deletTodo}
            handelEditTodo={handelEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
