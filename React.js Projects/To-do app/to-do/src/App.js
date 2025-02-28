import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import './style.css';

function App() {
  return (
    <div className='todo-container'>
    <Header Header="To-Do"/>
    <TodoItem text="Eat"/>
    <TodoItem text="Code"/>
    <TodoItem text="Gym"/>
    <TodoItem text="Sleep"/>
    <TodoItem text="Repeat"/>
    <Button/>

      
    </div>
  );
}

export default App;
