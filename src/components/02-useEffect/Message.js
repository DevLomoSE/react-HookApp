import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const {x,y} = coords;

    useEffect( () => {
        console.log("montado");
        
        const mouseMove = (e) => {
            const coords = { x:e.x, y:e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('desmontado');
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

  return (
    <>
      <h1>Eres genial!</h1>
      <p>X: {x}, Y: {y}</p>
    </>
  );
}
