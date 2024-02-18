import { RefObject, useEffect } from 'react';

interface UseOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useOnScreen = <T extends Element>(
  targetRef: RefObject<T>,
  onIntersectPath: string, // 화면에 나타났을 때 변경할 URL 경로
  options?: UseOnScreenOptions
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.pushState({}, '', `/${onIntersectPath}`);
          }
        });
      },
      {
        root: options?.root || null,
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0,
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, onIntersectPath, options]);
};
