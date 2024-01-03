import { useState, useEffect } from 'react';

/**
 * @description
 * Returns a number between 0 and 1 representing the scroll position of the page.
 *  - 0 에서 1 사이의 값을 리턴합니다
 *  - e.g) 스크롤을 거의 다 내렸을 때: 0.92
 *  - e.g) 웹사이트에 접속했을 때: 0
 *  - e.g) 웹사이트에 접속하고 조금 내렸을 때: 0.23
 */
export const useScrollPosition = () => {
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = getScrollYOffset() / getScrollHeight();
      setScrollFactor(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollFactor;
};

export const getScrollYOffset = (): number => {
  const documentElement = document.documentElement;
  const documentRect = documentElement.getBoundingClientRect();

  return -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
};

export const getScrollHeight = (): number => {
  const doc = document.documentElement;
  const body = document.body;

  return (doc.scrollHeight || body.scrollHeight) - doc.clientHeight;
};
