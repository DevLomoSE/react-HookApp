import React, { useReducer } from 'react';
import '../../styles/generals.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: crypto.randomUUID(),
    desc: 'Aprender react',
    done: false
}]

export const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState);

    console.log(todos);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>

      </ul>
    </>
  );
}
