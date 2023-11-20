import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Hed from '../components/Hed';

import styles from '../styles/App.module.css';  // CSSモジュールをインポート

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Hed />
    <main className={styles.appContainer}> 
      <Component {...pageProps} />
      </main>
    </div>
  
  );
}
