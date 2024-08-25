import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ cards, onRemove, selectToDo }) => {
  return (
    <Grid>
      {cards.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem id={id} text={text} index={index} onRemove={onRemove} selectToDo={selectToDo}/>
        </GridItem>
      ))}
    </Grid>
  );
};
