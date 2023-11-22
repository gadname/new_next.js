import Link from 'next/link';
import styles from './Postcard.module.css';

export default function Postcard({ post, handleDelete }) {
  return (
    
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
      <Link href={`/posts/${post.id}`}>
        <div className={styles.icon}>
          <img className={styles.img} src={post.image.url} alt="" />
        </div>
        
        <span className={styles.name}>{post.title}</span>
        </Link>
        <span className={styles.account}>725 Follow / 15,210 Followers</span>
        <span className={styles.link + " " + styles.text}>@ash_creator</span>
        <span className={styles.comment + " " + styles.text}>{post.content}</span>
        <Link href={`/edit-post/${post.id}`}>
          <div className={styles.editButton}>Edit</div>
        </Link>
        <button className={styles.deleteButton} onClick={(e) => {
          e.stopPropagation();
          handleDelete(post.id);
        }}>Delete</button>
        
      </div>
      
    </div>
   
  );
}
