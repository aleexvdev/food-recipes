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

  /* const cardClasses = `bg-white flex rounded-lg shadow-md overflow-hidden ${
    isLarge ? 'md:flex-col w-full h-full' : 'md:flex-col md:w-72'
  }`;

  const imageClasses = `${isLarge ? 'md:w-full md:h-full' : 'md:w-full h-32'} object-cover`;
  const contentClasses = `p-4 ${isLarge ? 'md:w-full' : ''}`;

  return (
    <motion.div
      key={id}
      className={cardClasses}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <img className={imageClasses} src={imageUrl} alt={title} />
      <div className={contentClasses}>
        <span>{date}</span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        { isLarge && <p className="text-gray-700">{description}</p> }
      </div>
    </motion.div>
  ); */

  /* return (
    <Link to={'/blog'} className="w-full bg-white p-4 rounded-lg shadow-md hover:bg-first/35">
      <div className='w-full h-full'>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
          <p className="text-gray-600">{description.slice(0, 60) + "..."}</p>
          <Link to={'/blog'} className="text-blue-500 font-bold text-sm">Read More</Link>
        </div>
      </div>
    </Link>
  ) */

}
