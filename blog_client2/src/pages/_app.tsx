import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Hed from '../components/Hed';
import { SessionProvider } from "next-auth/react"

import styles from '../styles/App.module.css';  // CSSモジュールをインポート

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
    <Hed />
    
    <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
   
    </div>
  )
  }
  
