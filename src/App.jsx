
import TodoList from './components/TodoList/TodoList';

const App = () => {

  const todoData = [
    { id: 1, text: 'Buy Groceys' },
    { id: 2, text: 'Send E-Mail' },
    { id: 3, text: 'Finish Assigment' },
    { id: 4, text: 'Write Blog' },
    { id: 5, text: 'Bake Cake' },
  ];

  return (
    <div>
      <h1>My ToDos</h1>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
