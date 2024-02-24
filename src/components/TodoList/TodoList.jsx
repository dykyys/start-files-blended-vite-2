import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todosArray, onDelete, onEdit }) => {
  return (
    <Grid>
      {todosArray.map(({ id, text }, ind) => {
        return (
          <GridItem key={id}>
            <TodoListItem
              text={text}
              index={ind + 1}
              onDelete={() => onDelete(id)}
              onEdit={() => onEdit(id)}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};
