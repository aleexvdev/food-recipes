import { TypeBlogPosts } from '../../../types/typeConstans'
import { Link } from 'react-router-dom';

interface ICardBlogPost {
  props: TypeBlogPosts;
}

export const CardBlogPost = ({ props }: ICardBlogPost) => {

  const { title, description, imageUrl } = props;

  return (
    <Link to={'/blog'} className="w-full max-w-[306px] bg-white p-4 rounded-lg shadow-md hover:bg-first/35">
      <div className='w-full h-full'>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className='w-full flex items-center justify-between'>
          <p className="text-gray-600">{description.slice(0, 60) + "..."}</p>
          <Link to={'/blog'} className="text-blue-500 font-bold text-sm">Read More</Link>
        </div>
      </div>
    </Link>
  )
}
