import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ array }) => {
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem {...item} count={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
