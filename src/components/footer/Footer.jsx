import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>sajad-dev</div>
      <div className={styles.text}>
        sajad creative thoughts &copy; agency All rights reserved.
      </div>
    </div>
  )
}

export default Footer
