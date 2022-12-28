import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //ReactDom
// ReactDOM.render(
//     <h1>Hello, React!</h1>,
//     document.getElementById('root')
// );


// //ReactDom Root
// const name = "Sumit";
// const el = <p>Hello, {name}</p>;

// ReactDOM.render(
//   el,
//   document.getElementById('root')
// ); 


//Counter every 1 ms
let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('root')
  );
}
//setInterval calls show every 1 ms
setInterval(show, 1); 