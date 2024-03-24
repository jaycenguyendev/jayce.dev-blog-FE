'use client';
import React, { useRef } from 'react';
import Typed from 'typed.js';
import Twemoji from '@/components/ui/twemoji';

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
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Jayce</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Da Nang, Viet Nam</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Da Nang</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love web development.</li>
        <li>
          I'm focusing on building <b className="font-medium">Social Analytics Software</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I'm a dog-person <Twemoji emoji="twa-dog" />.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            <Twemoji emoji="twa-soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love playing video game <Twemoji emoji="twa-video-game" />, LoL is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </>
  );
};

export default TypeBios;
