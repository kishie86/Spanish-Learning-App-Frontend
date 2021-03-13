import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactStarsRating from 'react-awesome-stars-rating';
import reportWebVitals from './reportWebVitals';


const onChange = (value) => {
  console.log(`React Stars Rating value is ${value}`);
};

const ReactStarsExample = ({ value }) => {
  return <ReactStarsRating onChange={onChange} value={value} />;
};



ReactDOM.render(
 
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
