import styles from '../styles/Layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Error = () => {
    return (
        <div className={styles.error}>
            <div className={styles.error_details}>
                <h2>Oooops</h2>
                <h2>SOMETHING WENT WRONG</h2>
                <h4>Error 404: Page Not Found</h4>
                <Link href="/"><a><button className={`dark:bg-slate-800 ${styles.error_button}`}>Go back to HomePage</button></a></Link>
            </div>
            <div>
                <Image src="/error.jpeg" width={250} height={250}/>
            </div>
        </div>
    );
}
 
export default Error;