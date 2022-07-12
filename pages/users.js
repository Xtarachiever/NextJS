import Link from 'next/link';
import styles from '../styles/Layout.module.css'
export const getStaticProps = async() =>{
    // try{
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const {data,errors} = await res.json();
    //     if (errors || !data) {
    //         return { notFound: true };
    //     }  
    //     return{
    //         props:{
    //             users: data
    //         }
    //     }
    // }
    // catch{
    //     return { notFound: false };
    // }
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return{
        props:{
            users: data
        }
    }
}
const Users = ({users}) => {
    return (
        <div className={styles.user_page}>
            <h2>Users</h2>
            {
                users.map(user=>(
                    <Link href={"/users/" + user.id} key={user.id}><a className={`dark:bg-slate-800 ${styles.userlists}`}>{user.name}</a></Link>
                ))
            }
        </div>
    );
}
 
export default Users;