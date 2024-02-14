import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CSSProperties } from 'styled-components';

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
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsScrollingDown(currentPosition > prevScrollPosition);
      setPrevScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

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
