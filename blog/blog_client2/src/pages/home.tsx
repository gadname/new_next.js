import Head from 'next/head';  
import Link from 'next/link';  
import styles from '../styles/MyComponent.module.css';  // CSS モジュールをインポート
import axios from 'axios';
import { useRouter } from 'next/router';
import RetroButton from '../components/RetroButton';
import PopButton from '../components/PopButton';
import DeleteButton from '../components/DeleteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'








type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
};  // Post 型を定義

type Props = {
  posts: Post[];
};

export async function getStaticProps() { //Props = ページごとに異なるPropsを設定できる
  const res = await fetch('http://localhost:3001/api/v1/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 120 * 60 * 24, // 1 day
  };
}

// const inter = Inter({ subsets: ['latin'] });  // もし不要であればコメントアウト

export default function Home({ posts }: Props) {
  const router = useRouter();

  const handleDelete = async (postId: number) => {
    try{
      await axios.delete(`http://localhost:3001/api/v1/posts/${postId}`);

      router.reload();
    } catch (err) {
      console.error(err);
      alert("削除に失敗しました");
    }

  }

  return (
    <>
    
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
            <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@1,400;1,600&family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </Head>

      
        <div className={styles.postsContainer}>


        
        {posts.map((post) => {
  console.log(post.image_url);
  return (
    <div key={post.id} className={styles.postCard}>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <img src={post.image.url} alt="image" className="card-img-top" width="600" height="200"/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href={`/edit-post/${post.id}`}><PopButton /></Link>
        <button onClick={(e) => {
          e.stopPropagation();
          handleDelete(post.id);
        }}><DeleteButton>Delete</DeleteButton></button>
      </div>
    </div>
  );
})}

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link href="/create-post">
        <RetroButton></RetroButton>
        </Link>
      </div>
      </div>
  </>
  );
}