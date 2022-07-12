import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Layout.module.css';
import { useTheme } from 'next-themes';
const Navbar = () =>{
  const {systemTheme, theme, setTheme} = useTheme();
  const [active, setActive] = useState(false);
  const [mounted, setMounted]= useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChange = () =>{
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if(currentTheme === 'dark'){
      return(
        <div className={`${styles.toggleMode}`} onClick={()=>setTheme('light')}></div>
      )
    }
    else{
      return(
        <div className={styles.toggleMode} onClick={()=>setTheme('dark')}></div>
      )
    }
  }

  const handleClick = () =>{
    setActive(!active)
  }

    return(
        <nav className={`dark:bg-slate-800 ${styles.nav}`}>
            <div className={styles.container}>
              <div className="flex flex-col items-start sm:flex-row sm:flex-grow sm:items-center">
                <Link href="/"><a>Collections</a></Link>
                    <div className={`${active ? '' : 'hidden'} w-full sm:inline-flex sm:w-auto sm:flex-grow `}>
                      <div className='sm:ml-auto sm:inline-flex sm:w-auto sm:flex-row w-full flex flex-col items-start'>
                        <Link href="/users"><a className='w-full pt-2 sm:px-3 sm:w-auto sm:inline-flex'>Explore Users</a></Link>
                        <Link href="/about"><a className='w-full pt-2 sm:px-3 sm:w-auto sm:inline-flex'>About</a></Link>
                        <Link href="/contact"><a className='w-full py-2 sm:px-3 sm:w-auto sm:inline-flex'>Contact Us</a></Link>
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
                <label className={styles.switch}>
                  <input type="checkbox" className='opacity-0 w-0 h-0'/>
                 {renderThemeChange()}
                </label>
            </div>
        </nav>
    )
}
export default Navbar