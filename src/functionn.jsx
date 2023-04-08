import React from 'react';
import jaaava from './jaaava';
const num = 9;
var year = new Date().getFullYear();
var time = new Date().getHours();
var customStyle = {
  color : ""
}
var greeting;
function functionn() {
    return (
      <><div className="App">
        <header className="App-header">
          <h1>My favourite Food Items</h1>
          <ul>
            <li>Maggi</li>
            <li>Fruits</li>
            <li>Vegetables</li>
          </ul>

        </header>


        <div>
          <h3>Your lucky number is {num}</h3>
          <h2>Created by me in {year}</h2>
        </div>

      </div><jaaava /></>
    );
}
export default functionn;