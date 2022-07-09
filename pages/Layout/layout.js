import Navbar from "../fixed_pages/navbar";
import Footer from "../fixed_pages/footer";

const Layout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;