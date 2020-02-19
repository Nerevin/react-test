import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Row from './Row';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

function r(element: any) {
  ReactDOM.render(element, document.getElementById('root'));
}

async function requestData() {
  const url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    for (let i = 0; i < json.length; i++) {
    const element = <Row id = {json[i].id} firstName = {json[i].firstName} lastName = {json[i].lastName} email = {json[i].email}
     phone = {json[i].phone} description = {json[i].description} />;
     r(element);
    }
  }
  else {
    console.log(response.status);
  }
}

requestData()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
