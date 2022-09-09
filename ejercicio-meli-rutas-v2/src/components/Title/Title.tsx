import React from "react";

// Styles
import "./_title.scss";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <h1 className="test">{text}</h1>
    </>
  );
};

export default Title;
