import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CSSProperties } from 'styled-components';
import { useScrollPosition } from '@/hooks/use-scroll-position.ts';

const ScrollSlideText = ({
  text,
  style,
  direction,
  duration = 0.5,
}: {
  text: string;
  style: CSSProperties;
  direction: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useScrollPosition(({ scrollDirection }) => {
    setIsScrollingDown(scrollDirection === 'down');
  });

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(textRef.current, {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: isScrollingDown
        ? direction === 'left' || direction === 'up'
          ? -100
          : 100
        : 0,
      opacity: isScrollingDown ? 0 : 1,
      duration,
    });

    tl.play();
  }, [isScrollingDown, direction, duration]);

  return (
    <div ref={textRef} style={style}>
      {text}
    </div>
  );
};

export default ScrollSlideText;
