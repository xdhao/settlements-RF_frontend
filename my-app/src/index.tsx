import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const divStyle = {
  marginLeft: '10px',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<div>
  <h1 style={divStyle}>Населенные пункты РФ</h1>
  <App />
</div>
);

