import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './App-v1';
// import App from './App-v2';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10}/>
    <StarRating size={24} color='red'className="test" messages={[ "Terrible","Bad","Okay","Good","Amazing"]} defaultRating={3}/> */}

  </React.StrictMode>
);
