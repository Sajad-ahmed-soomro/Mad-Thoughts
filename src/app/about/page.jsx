
import styles from './about.module.css'
import Image from 'next/image'
 
export const metadata ={
  title:"About Page",
  description:"About description"
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We are digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem autem deserunt quibusdam sequi iusto, explicabo ipsum voluptate in similique dolor. Perspiciatis, blanditiis qui?</p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}></Image>
      </div>

    </div>
  )
}

export default AboutPage
