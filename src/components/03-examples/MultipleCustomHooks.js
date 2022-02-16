import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/fetch.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `${process.env.REACT_APP_BB_LINK}/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; // !!flag => convierte un null en falso

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      {loading ? (
        <div className="text-center alert alert-info">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer text-white">{author}</footer>
        </blockquote>
      )}

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
