import React from 'react';
const num = 9;
var year = new Date().getFullYear();
var time = new Date().getHours();
var customStyle = {
  color : ""
}
var greeting;
function jaaava(){

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
return  <h1 style ={customStyle}>{greeting}</h1>;
} 
export default jaaava;