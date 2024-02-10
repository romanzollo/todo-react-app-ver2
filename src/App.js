import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos//TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodosActions';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const todoObject = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };

        setTodos([...todos, todoObject]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const todoCompletedHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo };
            })
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCounter = todos.filter(
        (todo) => todo.isCompleted
    ).length;

    return (
        <div className="App">
            <h1>Todo React App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {todos.length > 0 && (
                <TodoActions
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                    completedTodosExist={!!completedTodosCounter}
                />
            )}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                todoCompleted={todoCompletedHandler}
            />

            {!!completedTodosCounter && (
                <h2>{`You have ${completedTodosCounter} completed ${
                    completedTodosCounter > 1 ? 'todos' : 'todo'
                }`}</h2>
            )}
        </div>
    );
}

export default App;
