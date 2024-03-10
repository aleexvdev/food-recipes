import { NavLink } from 'react-router-dom'

export const Logo = () => {

  return (
    <div className="w-full h-full">
      <NavLink  to={'/'} className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Foody<span className="text-2xl font-bold text-orange-500">.</span></h1>
      </NavLink>
    </div>
  )
}
