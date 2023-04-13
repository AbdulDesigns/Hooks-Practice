import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //useState to manage state
  const [width, setWidth] = useState(window.innerWidth);

  //widthUpdater
  const widthUpdater = () => {
    setWidth(() => {
      setWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    window.addEventListener("resize", widthUpdater);
    return window.removeEventListener("resize", widthUpdater);
  });
  return <div>{width}</div>;
};

export default UseEffect;
