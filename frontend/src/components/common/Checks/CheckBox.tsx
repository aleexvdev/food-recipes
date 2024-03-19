interface ICheckBox {
  text: string;
  handleChange?: () => void;
}

export const CheckBox = ({ text, handleChange }: ICheckBox) => {
  return (
    <label htmlFor={text} className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        name="checkbox"
        id={text}
        onChange={handleChange}
        className="accent-first"
      />
      <span className="text-lg text-black/85">{text}</span>
    </label>
  );
};