// Dependencies
import { createContext, FC, ReactNode, useState } from 'react';

interface InputContextProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const InputContext = createContext({} as InputContextProps);

interface InputProviderProps {
  children: ReactNode;
}

export const InputProvider: FC<InputProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>{children}</InputContext.Provider>
  );
};
