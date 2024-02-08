import { useState } from 'react';
import TodoForm from './components/Todos//TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        setTodos([...todos, text]);
    };

    const deleteTodoHandler = (idx) => {
        setTodos(todos.filter((_, index) => idx !== index));
    };

    return (
        <div className="App">
            <h1>Todo React App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
        </div>
    );
}

export default App;
