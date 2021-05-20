import React, { useState } from "react";

function Sum() {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(0);

    const mockedArr = ["Juani", "Courseit", 2021];

    function handleClick() {
        const { firstInput, secondInput } = inputs;

        setResult(parseInt(firstInput) + parseInt(secondInput));
    }

    function handleChange(e) {
        const { id, value } = e.target;

        const newState = {
            // creamos una nueva variable para luego reemplazarla en nuestro estado
            ...inputs, // clonamos el puntero en memoria de nuestro estado actual y lo guardamos en nuestro nuevo objeto
            [id]: value // reemplazamos la propiedad 'id' por la que tenia nuestro antiguo estado inputs
        };

        setInputs(newState); // sobreescribimos todo nuestro viejo estado con nuestra nueva variable
    }

    return (
        <>
            <input type="text" onChange={handleChange} id="firstInput" />
            <input type="text" onChange={handleChange} id="secondInput" />
            <button onClick={handleClick}>Sumar</button>
            <p>La suma es: {result}</p>
            <ul>
                {mockedArr.map((val, key) => {
                    return (
                        <li key={key}>
                            {val} - {key}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Sum;
