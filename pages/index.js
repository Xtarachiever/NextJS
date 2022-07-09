import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.section}> 
        <div className={styles.content}>
          <h1>We have the best collection of unique anime movies</h1>
          <p>There are various animes in this site to select from. This site shows the lists of user that watches anime and are officially a user.</p>
          <div className={styles.button_wrapper}>
            <button type='button' className={styles.button}>Lets Explore</button>
            <button type='button' className={styles.button}>Anime Images</button>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <Image src="/anime_cover.jpeg" height={300} width={250} alt="anime_cover"/>
        </div>
      </div>
    </div>
  )
}
