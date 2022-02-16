import React, { useRef } from 'react'
import "../../styles/generals.css";

export const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input 
        ref={ inputRef }
        className='form-control mb-2'
        placeholder='Nombre'
      />

      <button className='btn btn-outline-primary mt-2'
      onClick={handleClick}>
        Focus
      </button>
    </>
  );
}
