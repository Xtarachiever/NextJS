import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`flex flex-col ${styles.section}`}> 
        <div className={`order-2 sm:order-none ${styles.content}`}>
          <h1 className='text-center sm:text-left'>We have the best collection of unique anime movies</h1>
          <p className='text-center sm:text-left'>There are various animes in this site to select from. This site shows the lists of user that watches anime and are officially a user.</p>
          <div className={`flex flex-col mb-3 ${styles.button_wrapper}`}>
            <button type='button' className={`dark:bg-slate-800 ${styles.button}`}>Lets Explore</button>
            <button type='button' className={`dark:bg-slate-800 ${styles.button}`}>Anime Images</button>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <Image src="/anime_cover.jpeg" height={300} width={250} alt="anime_cover"/>
        </div>
      </div>
    </div>
  )
}
