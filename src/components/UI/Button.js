import styles from './Button.module.css';

function Button({ children, title, onClick }) {
    return (
        <button className={styles.button} title={title} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
