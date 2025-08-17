import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo, selectCurrentTodo }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem
            todo={todo}
            number={i + 1}
            deleteTodo={deleteTodo}
            selectCurrentTodo={selectCurrentTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
