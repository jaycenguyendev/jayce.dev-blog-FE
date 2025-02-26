'use client';
import { CSSProperties, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Animation3dHoverEffect = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [style, setStyle] = useState<CSSProperties>({});

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return;

    const { clientX, clientY } = e;
    const { width, height, x, y } = ref.current.getBoundingClientRect();
    const mouseX = Math.abs(clientX - x);
    const mouseY = Math.abs(clientY - y);
    const rotateMin = -15;
    const rotateMax = 15;
    const rotateRange = rotateMax - rotateMin;

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  }, []);

  useEffect(() => {
    const { current } = ref;

    if (!current) return;

    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (!current) return;

      current.removeEventListener('mousemove', onMouseMove);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className={`z-10 w-fit scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02] ${className}`}
      style={{ perspective: '800px' }}
      ref={ref}
    >
      <div style={style}>{children}</div>
    </div>
  );
};

export default Animation3dHoverEffect;
