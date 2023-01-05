import { useEffect, useState } from "react";
import "./App.css";

export default function Square() {
  const [bg, setBg] = useState({
    backgroundColor: "#1d1d1d",
    transition: "none",
  });
  function colorize() {
    const colors = ["#1da1f2", "#EF398E", "#FEBC11", "#00CC94", "#FF1D0B"];
    let rand = Math.floor(Math.random() * colors.length);
    let color = colors[rand];
    setBg((prev) => {
      return {
        ...prev,
        backgroundColor: color,
        transition: "none",
      };
    });
  }
  return (
    <span
      className='square'
      onMouseEnter={colorize}
      style={bg}
      onMouseLeave={() => {
        setBg((prev) => {
          return {
            ...prev,
            backgroundColor: "#1d1d1d",
            transition: "all linear .7s .2s",
          };
        });
      }}
    ></span>
  );
}
