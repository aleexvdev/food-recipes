import { MdSearch } from "react-icons/md";

interface IInput {
  placeholder: string;
}

export const Input = ({ placeholder }: IInput) => {
  return (
    <div className='h-12 rounded-2xl bg-first p-1 flex items-center justify-between'>
      <input 
        type="text"
        className='outline-none w-full h-full bg-white rounded-l-xl px-3 text-lg relative'
        placeholder={placeholder}
      />
      <MdSearch className="bg-white w-12 h-full rounded-r-xl p-1" />
    </div>
  );
}
