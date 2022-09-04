import React from "react";

// Interfaces
import { Handset } from "../../types/types";

interface ItemProps {
  item: Handset;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  // console.log(item);
  const { thumbnail, title } = item;

  return (
    <>
      <img src={thumbnail} alt={thumbnail} />
      <p>{title}</p>
    </>
  );
};

export default Item;
