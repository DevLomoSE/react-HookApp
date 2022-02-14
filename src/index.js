import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
