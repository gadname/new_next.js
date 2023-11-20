import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';  // axios をインポート
import styles from "../styles/MyComponent.module.css";
import { useRouter } from 'next/router';


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/api/v1/posts", {
                post: {
                    title: title,
                    content: content,
                }
        });

        router.push("/");
        // ユーザーに成功を通知
            setTitle("");  // タイトルをクリア
            setContent("");  // コンテンツをクリア
        } catch (err) {
            console.error(err);  // エラーの詳細をコンソールに出力
            alert("投稿に失敗しました");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ブログ新規登録</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>タイトル</label>
                <input 
                    type="text" 
                    className={styles.input} 
                    value={title}  // value を設定
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
                />
                <label className={styles.label}>本文</label>
                <textarea 
                    className={styles.textarea} 
                    value={content}  // value を設定
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} 
                />
                <button type="submit" className={styles.button}>投稿</button>
            </form>
        </div>
    );
}

export default CreatePost;
