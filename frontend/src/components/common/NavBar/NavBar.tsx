import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../../constans/nav';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute w-full z-10 bg-white'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex items-center justify-between h-20'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex-shrink-0'>
              <Link to='/'>
                <h1 className='text-4xl font-bold text-black'>F<span className='text-first'>oo</span>dy<span className='text-4xl font-bold text-orange-500'>.</span></h1>
              </Link>
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

      <div className={`md:hidden w-full h-full ${isOpen ? 'block' : 'hidden'}`}>
        <div className='w-full h-full px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <div className='flex flex-col items-center justify-center gap-5 h-full'>
            {
              navItems.map(({ link, path }) => 
                <NavLink to={path} key={link} className={({ isActive }) =>
                  `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md ${
                    isActive? 'bg-gray-900 text-white' : ''
                  }`
                }>{link}</NavLink>
              )
            }
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
