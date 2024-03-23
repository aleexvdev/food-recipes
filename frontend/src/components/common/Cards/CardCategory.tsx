import { Link } from 'react-router-dom'
import { DiCoffeescript } from 'react-icons/di'
import { LuSalad } from 'react-icons/lu'
import { MdDinnerDining, MdOutlineCookie, MdOutlineLunchDining } from 'react-icons/md'
import { SiBuymeacoffee } from 'react-icons/si'
import { TypeCategories } from '../../../types/typeConstans'

interface ICardCategory {
  props: TypeCategories
}

export const CardCategory = ({ props }: ICardCategory) => {

  const iconCategory = (category: string) => {
    switch (category) {
      case 'Breakfast':
        return <SiBuymeacoffee className='text-3xl text-white' />
      case 'Dinner':
        return <MdOutlineLunchDining className='text-3xl text-white' />
      case 'Lunch':
        return <MdDinnerDining className='text-3xl text-white' />
      case 'Snack':
        return <MdOutlineCookie className='text-3xl text-white' />
      case 'Teatime':
        return <DiCoffeescript className='text-3xl text-white' />
      default:
        return <LuSalad className='text-3xl text-white' />
    }
  }

  return (
    <div className='flex flex-col w-full h-full items-center justify-center rounded-lg gap-2 max-w-[300px] md:max-w-[200px] p-5 border border-gray-300 hover:bg-first/35 shadow-lg'>
      <div className='rounded-full bg-first p-2'>
        {
          iconCategory(props.category)
        }
      </div>
      <h1 className='font-bold text-xl'>{props.category}</h1>
      <p className='text-center pb-3'>{props.description}</p>
      <Link to={'/recipes'}>
        <button className='text-black font-bold text-md hover:text-first'>Explore Menu</button>
      </Link>
    </div>
  )
}
