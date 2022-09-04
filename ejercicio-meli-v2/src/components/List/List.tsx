import React, { useState, useEffect } from "react";

// Components
import Item from "../Item/Item";

// Interfaces
import { Handset } from "../../types/types";

const List = () => {
  const [items, setItems] = useState<Array<Handset>>([]);

  useEffect(() => {
    // console.log("fase de creacion");
    getData();
  }, []);

  // voy a buscar los datos a la API de mercadolibre
  // voy a buscar la data a la API
  async function getData(): Promise<void> {
    const getData = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=5"
    );
    // console.log(getData);
    const getJson = await getData.json();
    // console.log(getJson.results);
    setItems(getJson.results);
  }

  // console.log(items);
  return (
    <>
      {items.map((item, key) => {
        const { id } = item;
        // si existe id utiliza el id si no utiliza la key, con esto nos aseguramos de no tener el warning del child por que tenemos
        // un plan a y un plan b y el plan b no va a fallar
        // estoy llamando al componente Item y le estoy pasando 2 props, key es una prop que no se pasa
        return <Item item={item} key={id ? id : key} />;
      })}
    </>
  );
};

export default List;
