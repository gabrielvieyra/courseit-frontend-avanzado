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
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=20"
    );
    // console.log(getData);
    const getJson = await getData.json();
    // console.log(getJson.results);
    setItems(getJson.results);
  }

  console.log(items);
  return (
    <>
      {items.map((item, key) => {
        return <Item key={key} item={item} />;
      })}
    </>
  );
};

export default List;
