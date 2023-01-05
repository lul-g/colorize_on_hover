import { useState } from "react";
import "./App.css";
import Square from "./Square";
let squares = [];
for (let i = 0; i < 20 * 25; i++) {
  squares[i] = i;
}
function App() {
  return (
    <div className='grid'>
      {squares.map((num) => {
        return <Square key={num} />;
      })}
    </div>
  );
}

export default App;
