import { ReactDOM } from "react";
import React, { useState } from "react";


function App() {
  const[newValue, Setval] = useState("");
  const[too,setto] = useState([]);
  function changee(event){
    const nevv= event.target.value;
    Setval(nevv);
  }
  function funcc(){
    
      setto( too => {
        return [...too , newValue]
      });
  }
  return (
    <div>
    <div>
      <input onChange = {changee}type = "text " placeholder ="enter the task" value ={newValue}/>
      <button onClick={funcc}>+</button>
    </div>
    <div>
    <ol>
      {too.map(toos  =>  <li>
        {too}
      </li>)}
    </ol>
    </div>
    </div>
    );
 }
 

  
 

 




export default App;

