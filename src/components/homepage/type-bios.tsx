'use client';
import React, { useRef } from 'react';
import Typed from 'typed.js';

type Props = {};

const TypeBios = (props: Props) => {
  const el = useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 50,
      backSpeed: 10,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <ul id="bios">
        <li>This is hoang</li>
      </ul>
      <span ref={el} />
    </>
  );
};

export default TypeBios;
