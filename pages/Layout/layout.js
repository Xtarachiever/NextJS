import Navbar from "../fixed_pages/navbar";

const Layout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            
        </div>
    )
}
export default Layout;