import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todos, deleteTodo, index }) {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todos}</div>
        </div>
    );
}

export default Todo;
