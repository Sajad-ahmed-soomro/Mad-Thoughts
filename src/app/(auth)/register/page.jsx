import React from 'react'
import styles from './register.module.css'
import Register from '@/components/registerForm/Register'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Register></Register>
      </div>
    </div>
  )
}

export default RegisterPage
