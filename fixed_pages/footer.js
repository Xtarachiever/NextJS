import Link from 'next/link';
import styles from '../styles/Layout.module.css';
const Footer = () =>{
    return(
        <div className={`dark:bg-slate-800 ${styles.footer}`}>
            <div className={styles.footer_content}>
              <p>&copy; Copyright 2022</p>
              <p className="text-center">Developed By <Link href="https://github.com/Xtarachiever"><a>Xtarachiever</a></Link></p>
            </div>
        </div>
    )
}
export default Footer;