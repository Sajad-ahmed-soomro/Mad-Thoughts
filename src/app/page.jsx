import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          Creative Thoughts Agency.</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae temporibus corrupti voluptatum debitis labore rem non laudantium aliquam dolorem!</p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}></Image>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" className={styles.heroImg} alt="" fill></Image>
      </div>
    </div>);
};

export default Home;