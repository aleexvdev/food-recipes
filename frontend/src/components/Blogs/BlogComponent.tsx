import { TypeBlogPosts } from '../../types/typeConstans'
import { CardBlog } from '../common/Cards/CardBlog';

interface IBlogComponent {
  blogPosts: TypeBlogPosts[];
}

export const BlogComponent = ({ blogPosts }: IBlogComponent) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center px-5 lg:px-0">
      {
        blogPosts.map((blog, index) => {
          return <CardBlog key={index} blog={blog} />
        })
      }
    </div>
  );
}
