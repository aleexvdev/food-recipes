import { useCallback, useState } from 'react';

export const useInputState = (initialValue:string = '') => {
  const [value, setValue] = useState<string>(initialValue);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;
    setValue(newValue);
  };

  const clearInput = () => {
    setValue('');
  };

  const memoizedOnChange = useCallback(onChangeInput, []);
  const memoizedClearInput = useCallback(clearInput, []);

  return { value, onChangeInput: memoizedOnChange, clearInput: memoizedClearInput };
};
