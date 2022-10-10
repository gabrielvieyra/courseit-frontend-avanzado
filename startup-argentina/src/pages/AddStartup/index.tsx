// Dependencies
import { FC, useState } from 'react';

// Components
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';

// Custom hooks
import { useValidate } from '../../hooks/useValidate';

// Styles
import './styles.scss';

const AddStartup: FC = () => {
  const [inputValue, setInputValue] = useState<Object>({});
  const [isValid, addStartup] = useValidate();
  //   console.log(addStartup);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // console.log('test');
  }

  function handleValue(inputValue: string): void {
    console.log(inputValue);
    // setInputValue(inputValue);
  }

  return (
    <div className='addStartup'>
      <form onSubmit={handleSubmit}>
        <TextField type='text' label='Nombre' handleValue={handleValue} placeholder='Nombre' />
        <TextField type='text' label='Logo' handleValue={handleValue} placeholder='Link a imagen' />
        <TextField type='email' label='Mail' handleValue={handleValue} placeholder='Mail' />
        <TextArea />
        <TextField type='text' label='Web' handleValue={handleValue} placeholder='Web (opcional)' />
        <TextField
          type='text'
          label='Twitter'
          handleValue={handleValue}
          placeholder='Twitter (opcional)'
        />
        <TextField
          type='text'
          label='Instagram'
          handleValue={handleValue}
          placeholder='Instagram (opcional)'
        />
        <p>Tenes campos vacios, por favor completalos</p>
        <button type='submit' onClick={() => addStartup(inputValue)}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddStartup;
