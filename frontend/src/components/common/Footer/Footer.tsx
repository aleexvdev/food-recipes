import { Link } from 'react-router-dom'
import { socialNetworks } from '../../../constans/data'
import { SocialNet } from '../Social/SocialNet'

export const Footer = () => {
  return (
    <footer className="w-full h-auto flex flex-col items-center justify-center relative">
      <div className="w-full py-8 bg-first/85">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className='w-full md:w-auto flex flex-col items-center'>
            <p className="text-white text-lg font-semibold mb-2">Recipes data provided by</p>
            <Link to={'https://www.edamam.com/'} className="w-full md:w-auto flex justify-center">
              <img src={'/assets/logo.png'} title='Edaman' alt="https://www.edamam.com/" className="h-12" />
            </Link>
          </div>
          <div className="w-full md:w-auto flex flex-col items-center">
            <p className="text-white text-lg font-semibold mb-2">Social Media</p>
            <ul className="flex items-center justify-center gap-5">
              {socialNetworks.map((social) => (
                <SocialNet key={social.id} props={social} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-first w-full h-auto py-2'>
        <p className='text-white text-center'>Made by @alexvdev</p>
      </div>
    </footer>
  );
}