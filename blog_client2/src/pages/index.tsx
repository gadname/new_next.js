import React from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Login from '../components/Login'
import Logout from '../components/logout'
import DeleteUser from '../components/deleteUser'
import Header from '../components/Header';
import Main from '../components/Main';
import Link from 'next/link';


export default function Home() {
  let typewriterText = "AIで、創る。";
  const { data: session, status } = useSession()

  return (
    <>
     <div>
      <Header />
      <h1 className="top_text">{typewriterText}</h1>
      <h2 className="top_text2">{typewriterText}</h2>
      <Main />

      

      <Link href="/home">
        <div className="gotoHome">Go to Home</div>
      </Link>
    </div>
      <div className="login">
        <h1>next-rails-google-auth</h1>

        {status === 'authenticated' ? (
          <div>
            <p>セッションの期限：{session.expires}</p>
            <p>ようこそ、{session.user.name}さん</p>
            <img src={session.user.image} alt='' style={{ borderRadius: '50px' }} />
            <div>
              <Logout />
            </div>
            <DeleteUser />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  )
}

