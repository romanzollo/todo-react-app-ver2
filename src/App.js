import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos//TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const todoObject = {
            text,
            isComplited: false,
            id: uuidv4(),
        };

        setTodos([...todos, todoObject]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const todoComplitedHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isComplited: !todo.isComplited }
                    : { ...todo };
            })
        );
    };

    return (
        <div className="App">
            <h1>Todo React App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                todoComplited={todoComplitedHandler}
            />
        </div>
    );
}

export default App;
