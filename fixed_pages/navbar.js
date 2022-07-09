import Link from 'next/link';
import styles from '../styles/Layout.module.css';
const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link href="/"><a>Collections</a></Link>
                <div className={styles.nav_content}>
                  <Link href="/users"><a>Explore Users</a></Link>
                  <Link href="/about"><a>About</a></Link>
                  <Link href="/contact"><a>Contact Us</a></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar