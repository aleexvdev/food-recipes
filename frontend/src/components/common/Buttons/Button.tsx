import { useState } from "react";

interface IButton {
  text: string;
  className: string;
  handleClick?: () => void;
}

export const Button = ({ text, className, handleClick }: IButton) => {

  const [isActiveBtn, setIsActiveBtn] = useState<string>('All');
  
  const handleClickBtn = (params: string) => {
    setIsActiveBtn(params);
    console.log(params)
    handleClick && handleClick();
  };

  return (
    <button 
      className={`${className} ${isActiveBtn === text ? 'bg-first text-white border-transparent' : 'bg-white text-black border-gray-500'} hover:bg-first hover:text-white hover:border-transparent`} 
      onClick={() => handleClickBtn(text)}
    >
      {text}
    </button>
  );
}