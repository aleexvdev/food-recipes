import { NavLink } from 'react-router-dom'

interface ILogo {
  active: boolean;
}

export const Logo = ({ active }: ILogo) => {

  return (
    <div className="w-full h-full">
      <NavLink  to={'/'} className="w-full h-full flex items-center justify-center">
        <h1 className={`text-4xl md:text-5xl font-bold ${active ? 'text-black' : 'text-white'} title`}>F<span className='text-first'>oo</span>dy<span className='text-4xl font-bold text-orange-500'>.</span></h1>
      </NavLink>
    </div>
  )
}
