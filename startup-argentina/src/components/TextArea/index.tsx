// Dependencies
import { FC } from 'react';

// Styles
import './styles.scss';

const TextArea: FC = () => {
  return (
    <div className='textArea'>
      <label>Descripcion:</label>
      <textarea></textarea>
    </div>
  );
};

export default TextArea;
