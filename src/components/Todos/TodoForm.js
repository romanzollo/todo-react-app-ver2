import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function submitFormHandler(event) {
        event.preventDefault();

        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={submitFormHandler}>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
