import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
