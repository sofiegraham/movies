console.log('File loaded yup yup!');
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App  />, document.getElementById('mount'));
});