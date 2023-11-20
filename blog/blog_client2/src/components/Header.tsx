import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.card}>
        <div className={styles.touch + " " + styles.touch__1}></div>
        <div className={styles.touch + " " + styles.touch__2}></div>
        <div className={styles.touch + " " + styles.touch__3}></div>
        <div className={styles.touch + " " + styles.touch__4}></div>
        <div className={styles.touch + " " + styles.touch__6}></div>
        <div className={styles.touch + " " + styles.touch__7}></div>
        <div className={styles.touch + " " + styles.touch__8}></div>
        <div className={styles.touch + " " + styles.touch__9}></div>
        <div className={styles.main}>
          <div className={styles.icon}>
            <img className={styles.img} src="https://pbs.twimg.com/profile_images/1568001848795353088/6IicRRIF_400x400.jpg" alt="" />
          </div>
          <span className={styles.name}>あなたの名前</span>
          <span className={styles.account}>725 Follow / 15,210 Followers</span>
          <span className={styles.link + " " + styles.text}>@ash_creator</span>
          <span className={styles.comment + " " + styles.text}>仕事が好きです。<br />CSSが好きです。<br />クリエイティブが大好きです。</span>
        </div>
      </div>

      <div className={styles.circle + " " + styles.circle_1}>
      <span className={styles.circleText}>AI個展</span></div>
      <div className={styles.circle + " " + styles.circle_2}></div>
      <div className={styles.circle + " " + styles.circle_3}></div>
      <div className={styles.circle + " " + styles.circle_4}></div>
      <div className={styles.circle + " " + styles.circle_5}></div>
      <div className={styles.circle + " " + styles.circle_6}></div>
      <div className={styles.circle + " " + styles.circle_7}></div>
      <div className={styles.circle + " " + styles.circle_8}></div>
    </div>
  );
}