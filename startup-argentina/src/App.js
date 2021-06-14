import React from "react";
import { usePassword } from "./hooks/password";

function App() {
    const [isValid, handleChange] = usePassword(5);

    return (
        <>
            <input type="number" onChange={handleChange} />
            {isValid ? <p>CONTRASEÑA VALIDA</p> : <p>CONTRASEÑA INVALIDA</p>}
        </>
    );
}

export default App;
