import React from "react";
import TitleMain from "./components/TitleMain";
import TitleSecondary from "./components/TitleSecondary";
import Carousel from "./components/Carousel";

function App() {
    return (
        <>
            <TitleMain title="Hola Courseit" />
            <TitleMain title="Hola Courseit" />
            <TitleSecondary title="Curso de Frontend Avanzado" />
            <TitleMain title="Hola Courseit" />
            <TitleMain title="Hola Courseit" />
            <Carousel />
        </>
    );
}

export default App;
