import styles from './PopButton.module.css';

function PopButton() {
    return (
    <div className={styles.container}>
        <div className={`${styles.button} ${styles['type--A']}`}>
            <span className={styles.button__text}>EDIT</span>
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

export default PopButton;

