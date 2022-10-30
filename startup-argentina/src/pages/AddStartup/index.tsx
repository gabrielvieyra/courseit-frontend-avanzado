import { FC, useState } from 'react';

// Components
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';

// Custom hooks
import { useValidate } from '../../hooks/useValidate';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// Styles
import './styles.scss';

// Interfaces
import { Input } from '../../types/types';

const AddStartup: FC = () => {
  const requiredFields = ['name', 'logo', 'mail'];

  const [inputs, setInputs] = useState<Input>({});

  const errors = useValidate(inputs, requiredFields);
  const [parseStartups, handleSave] = useLocalStorage();

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
    // Validamos que el formulario no tenga errores
    if (errors.length === 0) {
      handleSave(inputs);
    } else {
      console.log(`Tenes un error en ${errors}`);
    }
  }

  // Ejercicio:
  // 01 cuando le damos al btn crear startup y todos los campos del formulario estan bien vamos a guardar esa informacion en el localStorage
  // 02 en la pantalla de home en vez de tener un listado de startups hardcodeadas, vamos a traernos las startups del localStorage

  // Tip:
  // Crear un custom hook (useLocalStorage) donde le pasan un valor, ese valor va a ser una funcion y vamos a leer informacion dentro de esa funcion
  return (
    <>
      <Navbar showInput={false} />
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
    </>
  );
};

export default AddStartup;
