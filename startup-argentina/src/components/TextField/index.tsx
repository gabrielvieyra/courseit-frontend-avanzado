// Dependencies
import { FC } from 'react';

// Styles
import './styles.scss';

interface TextFieldProps {
  type: string;
  label?: string;
  placeholder: string;
  handleValue: (inputValue: string) => void;
}

const TextField: FC<TextFieldProps> = ({ type, label, placeholder, handleValue }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    handleValue(e.target.value);
  }

  return (
    <div className='textField'>
      {label && <label>{label}:</label>}
      <input type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default TextField;
