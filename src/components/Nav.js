import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiMenu, mdiCloseCircle } from '@mdi/js'
import { Home } from './Home'
import Projects from './Projects'
import { Link } from 'react-scroll'

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setwidth(window.innerWidth);
  };



  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    if (width < 1024) {
      setisOpen(true);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  const isMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <div className='code fixed text-white p-2 h-12 w-full bg-black lg:flex items-center lg:justify-between z-50'>
        <div className='flex justify-between items-center'>
          <div>Ronald Portfolio</div>
          {isOpen ? (
            <button className='lg:hidden' onClick={isMenu}>
              <Icon path={mdiMenu} title='menuIcon' size={1} />
            </button>
          ) : (
            <button className='lg:hidden' onClick={isMenu}>
              <Icon path={mdiCloseCircle} title='closeIcon' size={1} />
            </button>
          )}
        </div>
        <div
          className={
            !isOpen
              ? 'block bg-black lg:flex lg:justify-between lg:items-center'
              : 'hidden lg:flex lg:justify-between lg:items-center'
          }
        >
          <Link
            to='home'
            smooth={true}
            duration={700}
            onClick={() => setisOpen(!isOpen)}
            className='block p-3 text-white bg-black hover:text-indigo-600 cursor-pointer'
          >
            Home
          </Link>
          <Link
            to='projects'
            smooth={true}
            duration={700}
            onClick={() => setisOpen(!isOpen)}
            className='block p-3 text-white bg-black hover:text-indigo-600 cursor-pointer'
          >
            Projects
          </Link>
        </div>
      </div>
      <Home />
      <Projects />
      <div className='flex justify-between items-center h-12 bottom-0 bg-black text-white'>
          <div className='px-4'>MIT License</div>
          <div className='px-4'>Thank you for visiting my portfolio page.</div>
      </div>
    </div>
  )
}


export default Nav