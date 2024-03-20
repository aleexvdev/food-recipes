interface ICheckBox {
  text: string;
  type: string;
  handleChangeCheckbox?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ text, type, handleChangeCheckbox }: ICheckBox) => {

  return (
    <label htmlFor={text} className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        name={type}
        id={text}
        value={text.toLowerCase()}
        onChange={handleChangeCheckbox}
        className="accent-first"
      />
      <span className="text-lg text-black/85">{text}</span>
    </label>
  );
};