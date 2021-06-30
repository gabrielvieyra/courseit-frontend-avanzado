import React from "react";
import "./_test.scss";

function Test({ titleOne, titleTwo }) {
    return (
        <div className="card">
            <h1 className="card__headerOne">{titleOne}</h1>
            <h2>{titleTwo}</h2>
            <p className="card__text">
                Estimados, la gente de ICBC nos está pidiendo que para el
                desarrollo de una nueva librería de componentes tomemos el
                trabajo de maquetado, que en el caso de Lucy entiendo cubren
                ellos. Estos son los conocimientos que identifican para el
                trabajo a realizar. Se los comparto para que veamos cómo
                podríamos organizarnos
            </p>
            <button className="button">
                <span className="button__text">Ver mas</span>
            </button>
            <button className="button button--change">
                <span className="button__text">Ver mas</span>
            </button>
        </div>
    );
}

export default Test;
