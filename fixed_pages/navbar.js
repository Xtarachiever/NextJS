import Link from 'next/link';
import styles from '../styles/Layout.module.css';
const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link href="/"><a>Collections</a></Link>
                <div className={`hidden lg:inline-flex ${styles.nav_content}`}>
                  <Link href="/users"><a>Explore Users</a></Link>
                  <Link href="/about"><a>About</a></Link>
                  <Link href="/contact"><a>Contact Us</a></Link>
                </div>
				<button className=' inline-flex p-3 hover:bg-green-600 rounded sm:hidden text-black ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
            </div>
        </div>
    )
}
export default Navbar