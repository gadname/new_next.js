import Link from 'next/link';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Top() {
  return (
    <div>
      <Header />
      <Main />
      <h1>Welcome to the Top Page!</h1>
      <Link href="/home">
        <div>Go to Home</div>
      </Link>
      
    </div>
  );
}