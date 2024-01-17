
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
