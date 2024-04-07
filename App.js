import { useState } from "react";

function App() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [result, setRes] = useState(0);

  function decrementx() {
    setX(x - 1);
  }
  function incrementx() {
    setX(x + 1);
  }
  function decrementy() {
    setY(y - 1);
  }
  function incrementy() {
    setY(y + 1);  
  }


  function getresult1(){
    setRes (x+y);
  }

  function getresult2(){
    setRes(x-y);
  }

  function getresult3(){
    setRes (x*y);
  }

  function getresult4(){
    setRes (x/y);
  }

  return (
    <div className="App">
      
      <button onClick={incrementx}> + </button>
      <input type="text" readOnly value={x}></input>
      <button onClick={decrementx}> - </button>
      <br></br>
      <br></br>
      
      <button onClick={incrementy}> + </button>
      <input type="text" readOnly value={y}></input>
      <button onClick={decrementy}> - </button>
      
      <br></br>
      <br></br>

      <button onClick={getresult1} > + </button>
      <button onClick={getresult2} > - </button>
      <button onClick={getresult3} > * </button>
      <button onClick={getresult4} > / </button>

      <br></br>
      <br></br>

      <button onClick={getresult1}>Get Result</button>
      <input type="text" readOnly value={result}></input>
    </div>
  );
}

export default App;
