import React from 'react';
import { Card } from '../Elements';
import black from '../black.png';
import { useHover, useWindowWidth, useMeasure } from '../hooks';


const Hover = () => {
  const [isHovered, bind] = useHover();
  const width = useWindowWidth();
  const [{ ref }, bounds] = useMeasure();

  console.log("bounds", bounds)

  if (width < 400) return null;

    return (
      <div>
        <Card
          ref={ref}
          {...bind}
          style={{ background: isHovered ? "var(--black)" : "var(--purp)" }}
        >
          <h3>Some card</h3>
          <img src={black} alt='black' />
        </Card>
      </div>
    );
}

export default Hover;
