import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { blogPosts } from '../../constans/data';

export const CarouselComponent = () => {

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="relative w-full max-w-[600px] h-auto flex items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg border border-gray-300 mx-auto"
    >
      {blogPosts.map((post, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex flex-col items-start justify-between">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover md:h-64 sm:h-40"
            />
            <div className="p-5 flex flex-col items-start justify-center w-full h-full">
              <span className="text-md text-gray-600">{post.date}</span>
              <h3 className="text-lg font-semibold my-2">{post.title}</h3>
              <div className="w-full h-full flex items-center justify-between pb-3">
                <p className="text-gray-900">
                  {post.description.slice(0, 50) + "..."}
                </p>
                <Link
                  to={"/blog"}
                  className="bg-first text-white py-2 px-4 rounded-xl hover:bg-first/85 transition-colors"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
