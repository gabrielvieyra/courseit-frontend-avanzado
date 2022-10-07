// Creamos, declaramos nuestro custom Hook

// Dependencies
import { useState } from 'react';

export const usePassword = (
  minlength = 8
): [boolean, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [isValid, setIsValid] = useState<boolean>(false);

  // Los custom hooks pueden leer directamente los eventos del input que les estamos pasando
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const _isValid = value.length >= minlength ? true : false;
    setIsValid(_isValid);
  }

  // Lo que te devuelve este custom hook es una tupla, esto es muy parecido al getter y al setter del useState, en el primer lugar siempre te devuelve el resultado
  // que vos vas a querer leer y en el segundo lugar va el valor que vos le queres mandar, ej en este caso vos le vas a decir que input queres escuchar
  return [isValid, handleChange];
};
