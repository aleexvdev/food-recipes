import { TypeBlogPosts } from '../../../types/typeConstans'

interface ICardBlogPost {
  props: TypeBlogPosts;
  isLarge: boolean;
}

export const CardBlogPost = ({ props, isLarge }: ICardBlogPost) => {

  const { id, title, description, imageUrl, date } = props;

  return (
    <div
      key={id}
      className={`bg-white rounded-lg shadow-md overflow-hidden w-full h-full flex flex-col gap-2`}
    >
      <img className={`w-full ${isLarge ? 'md:h-[60%]' : 'h-[60%] md:h-32'} object-cover`} src={imageUrl} alt={title} />
      <div className={`${ isLarge ? 'p-5' : 'px-5 py-1' } flex flex-col items-start justify-end w-full h-full`}>
        <span className={`${ isLarge ? 'text-lg' : 'text-xs' } text-gray-600`}>{date}</span>
        <h3 className={`${ isLarge ? 'text-lg' : 'text-sm' } font-semibold my-2`}>{title}</h3>
        { isLarge && <p className="text-gray-700">{description}</p> }
      </div>
    </div>
  );
}
