import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, todoComplited }) {
    return (
        <div
            className={`${styles.todo} ${
                todo.isComplited ? styles.completedTodo : ''
            }`}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => deleteTodo(todo.id)}
            />
            <FaCheck
                className={styles.checkIcon}
                onClick={() => todoComplited(todo.id)}
            />
        </div>
    );
}

export default Todo;
