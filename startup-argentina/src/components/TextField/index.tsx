// Dependencies
import { FC } from 'react';

// Styles
import './styles.scss';

interface TextFieldProps {
  type: string;
  label?: string;
  placeholder: string;
  name: string;
  handleInputs: (inputValue: string, name: string) => void;
}

const TextField: FC<TextFieldProps> = ({ type, label, placeholder, name, handleInputs }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = e.target;
    // console.log(name);
    handleInputs(value, name);
  }

  return (
    <div className='textField'>
      {label && <label>{label}:</label>}
      <input type={type} placeholder={placeholder} name={name} onChange={handleChange} />
    </div>
  );
};

export default TextField;
