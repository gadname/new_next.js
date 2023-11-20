import Link from 'next/link';
import Header from '../components/Header';
import Main from '../components/Main';


export default function Top() {
  let typewriterText = "AIで、創る。";

  return (
    <div>
      <Header />
        <h1 className="top_text">{typewriterText}</h1>
      <Main />
      
      <Link href="/home">
        <div className="gotoHome">Go to Home</div>
      </Link>
    </div>
  );
}
