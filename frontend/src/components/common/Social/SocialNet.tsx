import { Link } from 'react-router-dom'
import { TypeSocialNetworks } from '../../../types/typesComponents'
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '../../../assets/Icons/Icons';

interface ISocialNet {
  props: TypeSocialNetworks;
}

export const SocialNet = ({ props }: ISocialNet) => {

  const { social_network, url } = props;

  const iconCategory = (social: string) => {
    switch (social) {
      case 'Facebook':
        return <FacebookIcon className='h-6 text-first hover:text-black transition-colors duration-300 text-2xl' />
      case 'Instagram':
        return <InstagramIcon className='h-6 text-first hover:text-black transition-colors duration-300 text-2xl' />
      case 'LinkedIn':
        return <LinkedInIcon className='h-6 text-first hover:text-black transition-colors duration-300 text-2xl' />
      case 'Github':
        return <GitHubIcon className='h-6 text-first hover:text-black transition-colors duration-300 text-2xl' />
      default:
        return '';
    }
  }

  return (
    <Link to={url} className='bg-white rounded-full p-2'>
      {
        iconCategory(social_network)
      }
    </Link>
  )
}
