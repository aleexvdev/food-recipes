import { Link } from 'react-router-dom'
import { TypeSocialNetworks } from '../../../types/typesComponents'
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../../../assets/Icons/Icons';
import { motion } from 'framer-motion';

interface ISocialNet {
  props: TypeSocialNetworks;
}

export const SocialNet = ({ props }: ISocialNet) => {

  const { social_network, url } = props;

  const iconCategory = (social: string) => {
    const baseClass = 'h-6 fill-none transition-colors duration-300 text-2xl';
    const hoverClass = '';

    switch (social) {
      case 'Facebook':
        return <FacebookIcon className={`${baseClass} ${hoverClass}`} />
      case 'Instagram':
        return <InstagramIcon className={`${baseClass} ${hoverClass}`} />
      case 'LinkedIn':
        return <LinkedInIcon className={`${baseClass} ${hoverClass}`} />
      case 'Github':
        return <GitHubIcon className={`${baseClass} ${hoverClass}`} />
      default:
        return '';
    }
  }


  return (
    <Link to={url} target='_blank'>
      <motion.div
        className="p-2 bg-white rounded-full text-first"
        whileHover={{
          backgroundColor: '#FF642F',
          color: 'white',
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
      >
        {iconCategory(social_network)}
      </motion.div>
    </Link>
  )
}
