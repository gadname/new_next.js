import Link from 'next/link';
import Header from '../components/Header';
import Main from '../components/Main';
import { Fade } from 'react-awesome-reveal';

export default function Top() {
  return (
    <div>
      <Header />
      <Main />
      <Fade>
      <h1 className="top_text">AIで、<br></br>想像を超えた<br></br>芸術を。</h1>
      </Fade>
      <Link href="/home" className="gotoHome">
        <div>Go to Home</div>
      </Link>
     
      
    </div>
  );
}