import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, todoCompleted }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    todoCompleted={todoCompleted}
                />
            ))}
        </div>
    );
}

export default TodoList;
