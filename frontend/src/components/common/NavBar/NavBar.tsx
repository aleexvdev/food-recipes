import React, { useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../../constans/nav';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Logo } from '../Logo/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { containerVars, menuVars } from '../../../constans/motionVars';
import { NavLinkMenu } from '../Link/NavLinkMenu';

const initialState = {
  isOpen: false,
  isScrolled: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'toggleMenu':
      return { ...state, isOpen: !state.isOpen };
    case 'handleScroll':
      return { ...state, isScrolled: action.payload };
    default:
      return state;
  }
}

const NavBar: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, isScrolled } = state;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      dispatch({ type: 'handleScroll', payload: scrollPosition > 0 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    dispatch({ type: 'toggleMenu' });
  };

  return (
    <nav
      className={`w-full z-50 fixed top-0 origin-top ${
        isScrolled ? 'bg-white shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between h-20">
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo active={isScrolled} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {navItems.map(({ link, path }) => (
                  <NavLink
                    to={path}
                    key={link}
                    className={({ isActive }) =>
                      `font-semibold text-xl hover:text-first ${
                        isActive ? 'text-first active-nav' : isScrolled ? 'text-black' : 'text-white'
                      }`
                    }
                  >
                    {link}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              className="bg-transparent inline-flex items-center justify-center"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <MdClose className={`${isScrolled ? 'text-black' : 'text-white'} w-7 h-7`} />
              ) : (
                <FaBars className={`${isScrolled ? 'text-black' : 'text-white'} w-6 h-6`} />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
            className={`fixed left-0 top-16 w-full h-screen origin-top bg-white overflow-hidden`}
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full justify-center items-center gap-8"
              >
                {navItems.map(({ link, path }) => (
                  <NavLinkMenu
                    key={link}
                    title={link}
                    path={path}
                    handleActive={toggleMenu}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
