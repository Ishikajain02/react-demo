import logo from './logo.svg';
import './App.css';

const num = 9;
var year = new Date().getFullYear();
var time = new Date().getHours();
var customStyle = {
  color : ""
}
var greeting;
if(time<12){
 greeting ="Good Morning";
 customStyle.color = "green";
}
else if(time>12 && time<18){
  greeting = "Good Afternoon";
  customStyle.color = "blue";
}
else{
  greeting = "Good Evening";
  customStyle.color = "pink";
}
function App() {
  return (
    <div className="App">
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
      <h1 style ={customStyle}>{greeting}</h1>
    </div>
  );
}

export default App;
