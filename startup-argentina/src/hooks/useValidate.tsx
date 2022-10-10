// Interfaces
import { Input } from '../types/types';

export const useValidate = (inputs: Input, requiredFields: Array<string>): Array<string> => {
  // esta logica valida si existe en un objeto x propiedad y si esa propiedad esta vacia o no esta vacia
  const errors = requiredFields.filter(field => {
    if (!inputs[field as keyof Input] || inputs[field as keyof Input]!.length <= 0) {
      return field;
    }
  });

  return errors;
};
