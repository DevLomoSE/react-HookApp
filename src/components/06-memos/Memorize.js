import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../../styles/generals.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(53);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-secondary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle {JSON.stringify(show)}
      </button>
    </>
  );
};
