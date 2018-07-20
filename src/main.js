import React from 'react';
import { render as renderDOM } from 'react-dom';
import App from './components/app/app';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <App />
      </React.Fragment>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
renderDOM(<Main />, root);
