import React, { useState } from 'react';
import "../../styles/generals.css";
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />

      {show && (
        <div>
          <MultipleCustomHooks />
        </div>
      )}

      <button
        className="btn btn-outline-danger mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
    </>
  );
}
