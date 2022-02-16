import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

console.log('me volvi a generar :(');

  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => {
          increment( 4 );
        }}
      >
        Incrementar
      </button>
    </div>
  );
});
