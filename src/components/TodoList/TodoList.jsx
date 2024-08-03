import { Grid } from '..';
import { TodoListItem } from '..';
import { GridItem } from '..';

export const TodoList = ({ array }) => {
  return (
    <Grid>
      {array.map((element, index) => (
        <GridItem key={element.id}>
          <TodoListItem todo={element} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};
