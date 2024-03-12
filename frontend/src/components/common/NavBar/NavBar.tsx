import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../../constans/nav';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Logo } from '../Logo/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { containerVars, menuVars } from '../../../constans/motionVars';
import { NavLinkMenu } from '../Link/NavLinkMenu';

const NavBar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' w-full z-10 bg-white fixed top-0 origin-top'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex items-center justify-between h-20'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex-shrink-0'>
              <Logo />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-10'>
                {
                  navItems.map(({ link, path }) => 
                    <NavLink to={path} key={link} className={({ isActive }) =>
                      `font-semibold text-xl hover:text-first ${
                        isActive ? 'text-first' : 'text-black'
                      }`
                    }>
                      {link}
                    </NavLink>
                  )
                }
              </div>
            </div>
          </div>
          <div className='flex md:hidden'>
            <button 
              className='bg-transparent inline-flex items-center justify-center'
              onClick={toggleMenu}
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              {
                isOpen ? <MdClose className='text-black w-7 h-7' /> : <FaBars className='text-black w-6 h-6' />
              }
            </button>
          </div>
        </div>
      </div>
      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden w-full h-screen bg-white ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className='w-full h-full px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <div className='flex flex-col items-center justify-center gap-10 h-full'>
              {navItems.map(({ link, path }) => (
                <NavLink
                  to={path}
                  key={link}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `font-semibold text-4xl hover:text-first ${
                      isActive ? 'text-first' : 'text-black'
                    }`
                  }
                >
                  <motion.span variants={childVariants}>{link}</motion.span>
                </NavLink>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence> */}
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              className={`fixed left-0 top-16 w-full h-screen origin-top bg-white ${isOpen ? 'block' : 'hidden'}`}
            >
              <div className='flex h-full flex-col'>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  transition={{ duration: 0.2 }}
                  className='flex flex-col h-full justify-center items-center gap-8'
                >
                  {navItems.map(({ link, path }) => (
                    <NavLinkMenu title={link} path={path} handleActive={toggleMenu} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;


/* 
<div className={`md:hidden w-full h-screen ${isOpen ? 'block bg-white' : 'hidden'}`}>
        <div className='w-full h-full px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <div className='flex flex-col items-center justify-center gap-10 h-full'>
            {
              navItems.map(({ link, path }) => 
                <NavLink to={path} key={link} onClick={toggleMenu} className={({ isActive }) =>
                  `font-semibold text-4xl hover:text-first ${
                    isActive ? 'text-first' : 'text-black'
                  }`
                }>{link}</NavLink>
              )
            }
          </div>
        </div>
      </div>
*/
