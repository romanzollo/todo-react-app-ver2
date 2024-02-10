import styles from './Button.module.css';

function Button({ children, title, onClick, disabled = false }) {
    return (
        <button
            className={styles.button}
            title={title}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
