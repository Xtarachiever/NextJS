import Link from "next/link";
import styles from '../../styles/Layout.module.css';
import Image from "next/image";
export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(user=>{
        return{
            params:{
                userId: `${user.id}`
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
}
export const getStaticProps = async(context)=>{
    const id = context.params.userId;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();
    return{
        props:{
            user: data
        }
    }
}
const UserId = ({user}) => {
    return (
        <div className={styles.eachUser}>
            <div className={`dark:border-4 dark:border-black-500 ${styles.anime_images}`}>
                <Image src="/anime.jpeg" width={200} height={200} />
            </div>
            <div>
               <h3>Username: {user.username}</h3>
               <Link href="mailto:user@example.com"><a>Email: {user.email}</a></Link>
               <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
               <p>Phone: {user.phone}</p>
               <p>Website: {user.website}</p>
               <p>Company: {user.company.name}</p>
            </div>
        </div>
    );
}
 
export default UserId;