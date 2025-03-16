
import React from 'react'
import { handleGoogleLogin } from '@/lib/action';
import { auth } from '@/lib/auth'
import LoginForm from '@/components/loginForm/LoginForm'
import styles from './login.module.css'

const LoginPage = async () => {

  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGoogleLogin}>
          <button className={styles.loginGoogle}>Login with Google</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
