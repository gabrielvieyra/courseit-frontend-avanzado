// Dependencies
import { FC, useState } from 'react';

// Components
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

// Custom hooks
import { useValidate } from '../../hooks/useValidate';

// Styles
import './styles.scss';

// Interfaces
import { Input } from '../../types/types';

const AddStartup: FC = () => {
  const requiredFields = ['name', 'logo', 'mail'];

  const [inputs, setInputs] = useState<Input>({});
  const errors = useValidate(inputs, requiredFields);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // console.log('test');
  }

  function handleInputs(inputValue: string, inputName: string): void {
    // const newInputs = {
    //   ...inputs,
    //   [inputName]: inputValue,
    // };
    // console.log(newInputs);
    // tambien se puede escribir de esta forma corta
    setInputs({ ...inputs, [inputName]: inputValue });
  }

  function addStartup(): void {
    errors.length === 0
      ? console.log('El formulario es valido')
      : console.log(`Tenes un error en ${errors}`);
  }

  return (
    <div className='addStartup'>
      <form onSubmit={handleSubmit}>
        <TextField
          type='text'
          name='name'
          label='Nombre'
          handleInputs={handleInputs}
          placeholder='Nombre'
        />
        <TextField
          type='text'
          name='logo'
          label='Logo'
          handleInputs={handleInputs}
          placeholder='Link a imagen'
        />
        <TextField
          type='email'
          name='mail'
          label='Mail'
          handleInputs={handleInputs}
          placeholder='Mail'
        />
        <TextArea />
        <TextField
          type='text'
          name='web'
          label='Web'
          handleInputs={handleInputs}
          placeholder='Web (opcional)'
        />
        <TextField
          type='text'
          name='twitter'
          label='Twitter'
          handleInputs={handleInputs}
          placeholder='Twitter (opcional)'
        />
        <TextField
          type='text'
          name='instagram'
          label='Instagram'
          handleInputs={handleInputs}
          placeholder='Instagram (opcional)'
        />
        <p>Tenes campos vacios, por favor completalos</p>
        <Button handleCallback={addStartup} />
      </form>
    </div>
  );
};

export default AddStartup;
