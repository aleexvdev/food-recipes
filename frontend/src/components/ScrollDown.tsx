import { IoIosArrowDown } from 'react-icons/io';

interface IScrollDownProps {
  targetRef: React.RefObject<HTMLElement>;
}

export const ScrollDown = ({ targetRef }: IScrollDownProps) => {

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={handleScroll}
    >
      <IoIosArrowDown className="text-white text-3xl animate-bounce" />
    </button>
  );
}
