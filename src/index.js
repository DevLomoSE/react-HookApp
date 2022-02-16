import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById('root')
);
