import { useSession } from 'next-auth/react';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import styles from "../styles/MyComponent.module.css";
import { useRouter } from 'next/router';

const CreatePost = ({ addPost }) => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!session) {
            alert("ログインしてください");
            return;
        }

        const formData = new FormData();
        formData.append('post[title]', title);
        formData.append('post[content]', content);
        if (image) {
            formData.append('post[image]', image);
        }
        formData.append('post[user_id]', session.user.id);

        try {
            const response = await axios.post("http://localhost:3001/api/v1/posts", formData);
            const newPost = response.data;
          
            // Save new post to localStorage
            const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
            storedPosts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(storedPosts));
            
            addPost(newPost); // 新たな投稿をposts配列に追加
    
            router.push("/home");
            setTitle("");
            setContent("");
            setImage(null);
            setImagePreviewUrl(null);
        } catch (err) {
            console.error(err);
            alert("投稿に失敗しました");
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>AIイラスト投稿</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>画像</label>
                <input 
                    type="file" 
                    className={styles.input} 
                    onChange={handleImageChange} 
                />
                {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview" className={styles.previewImage} />}
                <label className={styles.label}>タイトル</label>
                <input 
                    type="text" 
                    className={styles.input} 
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
                />
                <label className={styles.label}>プロンプト</label>
                <textarea 
                    className={styles.textarea} 
                    value={content}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} 
                />
                
                <button type="submit" className={styles.button}>投稿</button>
            </form>
        </div>
    );
}

export default CreatePost;
