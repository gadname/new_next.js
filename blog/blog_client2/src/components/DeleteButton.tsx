import styles from './DeleteButton.module.css';

function DeleteButton() {
    return (
    <div className={styles.container}>
        <div className={`${styles.button} ${styles['type--B']}`}>
            <span className={styles.button__text}>DELETE</span>
            <div className={styles.materials}>
                <div className={styles.materials__bar}></div>
                <div className={styles.materials__bar}></div>
                <div className={styles.materials__bar}></div>
                <div className={styles.materials__bar}></div>
                <div className={styles.materials__bar}></div>
                <div className={styles.materials__circle}></div>
                <div className={styles.materials__circle}></div>
                <div className={styles.materials__circle}></div>
            </div>
        </div>
        
    </div>
    );
}

export default DeleteButton;