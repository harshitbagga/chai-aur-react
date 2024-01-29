import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("#92a8d1");

  const colors = ["red", "green", "blue", "olive", "gray", "yellow", "pink", "lavender", "white", "black"];

  const setColors = () => {
    return colors.map((color) => (
      <button
        key={color}
        onClick={() => setColor(color)}
        className="outline-none px-1 rounded-full text-sky-400 shadow-lg"
        style={{ backgroundColor: color }}
      >
        {color}
      </button>
    ));
  };

  const colorsSet = setColors();

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorsSet}
          {/*<button onClick= {()=> setColor("red")} className="outline-none px-8 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
<button onClick= {()=> setColor("green")} className="outline-none px-8 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
  <button onClick= {()=> setColor("blue")} className="outline-none px-8 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>*/}
  <button onClick={()=>window.location.reload()}  className="outline-none px-1 rounded-full text-black shadow-lg" style={{backgroundColor:"olive"}}>Refresh Page</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
