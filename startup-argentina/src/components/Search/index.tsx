// Donde utilizamos nuestro custom hook

// Dependencies
import { FC } from 'react';

// Importamos nuestro custom hook
import { usePassword } from '../../hooks/usePassword';

const Search: FC = () => {
  // Lo que estamos haciendo aca es desestructurar en este caso el array que retorna mi custom hook
  const [isValid, onPasswordChange] = usePassword();
  // console.log(onPasswordChange);

  return (
    <div>
      <input type='text' placeholder='Buscar' onChange={onPasswordChange} />
      {isValid ? <p>contraseña valida</p> : <p>contraseña invalida</p>}
    </div>
  );
};

export default Search;
