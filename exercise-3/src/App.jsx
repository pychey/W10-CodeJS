import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [className,setClassName] = useState(null);
  const [result,setResult] = useState("");
  const [inputA,setA] = useState();
  const [inputB,setB] = useState();

  /* You will need some function to handle the key pressed and button events */
  function onA(e){ setA(Number(e.target.value)) }
  function onB(e){ setB(Number(e.target.value)) }
  function calculate(){
    if(isNaN(inputA) || isNaN(inputB)){
      setClassName("error");
      setResult("A and B shall be numbers !");
    } else {
      setClassName(null);
      setResult(inputA+inputB);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={className}/>
      <button onClick={calculate} >Compute</button>
    </main>
  );
}

export default App;
