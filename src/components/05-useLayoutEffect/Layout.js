import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `${process.env.REACT_APP_BB_LINK}/quotes/${counter}`
  );

  const { quote } = !!data && data[0]; // !!flag => convierte un null en falso

  const pRef = useRef();

  const [body, setBody] = useState({});

  useLayoutEffect(() => {
    setBody(pRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <h4>LayoutEffect</h4>
      <hr />

      <blockquote className="blockquote text-end">
        <p className="mb-2" ref={pRef}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(body, null)}</pre>

      <button
        className="btn btn-success"
        disabled={loading}
        onClick={increment}
      >
        Siguiente quote
      </button>
    </>
  );
};
