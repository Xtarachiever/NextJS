import styles from '../styles/Layout.module.css';
const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <div className={styles.container}>
                <h4>Collections</h4>
                <div className={styles.nav_content}>
                  <p>Explore Users</p>
                  <p>About</p>
                  <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar