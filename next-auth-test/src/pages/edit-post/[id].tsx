import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';  // axios をインポート
import styles from "../../styles/MyComponent.module.css";
import { useRouter } from 'next/router';
import { Post } from "@/types";
import { useSession } from 'next-auth/react';

type Props = {
    post: Post;
};

export async function getServerSideProps(context: any) {
    const id = context.params.id;

    const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`);
    const post = await res.json(); //json = JavaScriptのオブジェクト記法を用いたデータ交換フォーマット 

    return {
        props: {
            post,
        },
    };
}

const EditPost = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`);
            const post = await res.json();
            setTitle(post.title);
            setContent(post.content);
            // 画像がある場合は、setImageとsetImagePreviewUrlを設定
        };
        fetchPost();
    }, [id]);

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
            await axios.put(`http://localhost:3001/api/v1/posts/${id}`, formData);

            router.push("/home");
        } catch (err) {
            console.error(err);
            alert("投稿の更新に失敗しました");
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
            <h1 className={styles.title}>イラスト編集</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>変更したい画像</label>
                <input 
                    type="file" 
                    className={styles.input} 
                    onChange={handleImageChange} 
                />
                {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview" className={styles.previewImage} />}
                <label className={styles.label}>Title</label>
                <input 
                    type="text" 
                    className={styles.input} 
                      // value を設定
                    onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        setTitle(e.target.value)
                    } 
                    value={title}
                />
                <label className={styles.label}>本文</label>
                <textarea 
                    className={styles.textarea} 
                      // value を設定
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => 
                        setContent(e.target.value)}
                        value={content}
                />
                <button type="submit" className={styles.button}>編集</button>
            </form>
        </div>
    );
}

export default EditPost;