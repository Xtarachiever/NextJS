import Navbar from "../../fixed_pages/navbar";
import Footer from "../../fixed_pages/footer";
import styles from '../../styles/Layout.module.css'

const Layout = ({children}) =>{
    return(
        <div className={styles.wrapper}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;