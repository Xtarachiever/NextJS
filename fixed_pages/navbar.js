import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';
const Navbar = () =>{
  const [active, setActive] = useState(false)
  const handleClick = () =>{
    setActive(!active)
  }
    return(
        <nav className={`${styles.nav}`}>
            <div className={styles.container}>
              <div className="flex flex-col">
                <Link href="/"><a>Collections</a></Link>
                    <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:w-auto lg:flex-grow `}>
                      <div className='lg:ml-auto lg:inline-flex lg:w-auto w-full flex flex-col items-start'>
                        <Link href="/users"><a className='w-full pt-2'>Explore Users</a></Link>
                        <Link href="/about"><a className='w-full pt-2'>About</a></Link>
                        <Link href="/contact"><a className='w-full py-2'>Contact Us</a></Link>
                      </div>
                    </div>
              </div>
                <button className=' inline-flex hover:bg-blue-600 rounded 
                sm:hidden text-black ml-auto hover:text-white outline-none' onClick={handleClick}>
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
        </nav>
    )
}
export default Navbar