import { useEffect } from 'react';
import { reaction } from 'mobx';
import scrollStore from '@/store/scrollStore.ts';

type ScrollData = {
  scrollPosition: number;
  scrollDirection: string;
  maxScroll: number;
};

export const useScrollPosition = (callback: (data: ScrollData) => void) => {
  useEffect(() => {
    if (typeof callback !== 'function') {
      return; //초기 로딩시 callback이 undefined로 들어오는 이슈가 있음
    }

    const dispose = reaction(
      () => ({
        scrollPosition: scrollStore.scrollPosition,
        scrollDirection: scrollStore.scrollDirection,
        maxScroll: scrollStore.maxScroll,
      }),
      callback
    );

    return () => dispose();
  }, [callback]);
};
