import { motion } from 'framer-motion';
import { mobileLinkVars } from '../../../constans/motionVars';
import { NavLink } from 'react-router-dom';

interface INavLinkMenu {
  title: string;
  path: string;
  handleActive: () => void;
}

export const NavLinkMenu = ({ title, path, handleActive }: INavLinkMenu) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <NavLink to={path} key={title} onClick={handleActive} className={({ isActive }) =>
        `font-semibold hover:text-first ${
          isActive ? 'text-first' : 'text-black'
        }`
      }>
        {title}
      </NavLink>
    </motion.div>
  );
}
