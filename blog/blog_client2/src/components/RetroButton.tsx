import styles from './RetroButton.module.css';

function RetroButton() {
    return (
        <div className={styles.container}>
            <div className={`${styles.new_retro} ${styles['type-A']}`}>
    <div className={styles.button}>
      <div className={styles.text}>ツクる？</div>
      <div className={styles.button_bottom_line1}></div>
      <div className={styles.button_bottom_line2}></div>
    </div>
    <div className={styles.button_under}>
      <div className={styles.button_top_line1}></div>
      <div className={styles.button_top_line2}></div>
      <div className={styles.button_top_line3}></div>
    </div>
    <div className={styles.bg_yellow}></div>
    <div className={styles.bg_blue}></div>
    <div className={styles.wrapper}>
      <div className={`${styles.material} ${styles.circle_1}`}></div>
      <div className={`${styles.material} ${styles.circle_2}`}>
        <div className={styles.innerCircle}></div>
      </div>
      <div className={`${styles.material} ${styles.circle_3}`}></div>
      <div className={`${styles.material} ${styles.circle_4}`}></div>
      <div className={`${styles.material} ${styles.circle_5}`}></div>
      <div className={`${styles.material} ${styles.tryangle_1}`}></div>
      <div className={`${styles.material} ${styles.tryangle_2}`}></div>
    </div>
    <div className={`${styles.line} ${styles.line_blue}`}></div>
    <div className={`${styles.line} ${styles.line_yellow}`}></div>
    <div className={`${styles.line} ${styles.line_green}`}></div>
  </div>
  </div>

    );
}

export default RetroButton;
