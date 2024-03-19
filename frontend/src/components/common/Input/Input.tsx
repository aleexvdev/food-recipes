import { MdSearch } from "react-icons/md";

interface IInput {
  placeholder: string;
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChangeInput }: IInput) => {

  return (
    <div className='h-12 rounded-2xl bg-first p-1 flex items-center justify-between'>
      <input 
        type="text"
        className='outline-none w-full h-full bg-white rounded-l-xl px-3 text-lg relative'
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
      <button
        type="submit"
        className="bg-transparent w-12 h-full"
      >
        <MdSearch className="bg-white w-12 h-full rounded-r-xl p-1" />
      </button>
    </div>
  );
}
