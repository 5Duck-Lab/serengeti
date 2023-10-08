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
      const scrollY = window.scrollY;
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      setScrollFactor(scrollY / scrollMax); // 0 to 1
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollFactor;
};
