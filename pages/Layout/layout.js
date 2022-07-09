import Navbar from "../../fixed_pages/navbar";
import Footer from "../../fixed_pages/footer";
import styles from '../../styles/Layout.module.css'

const Layout = ({children}) =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.layout_nav}>
              <Navbar/>
            </div>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;