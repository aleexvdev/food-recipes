interface ICheckBox {
  text: string;
  handleChangeCheckbox?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ text, handleChangeCheckbox }: ICheckBox) => {

  return (
    <label htmlFor={text} className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        name="checkbox"
        id={text}
        onChange={handleChangeCheckbox}
        className="accent-first"
        data-name={text.toLowerCase()}
      />
      <span className="text-lg text-black/85">{text}</span>
    </label>
  );
};