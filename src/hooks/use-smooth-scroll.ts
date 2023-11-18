export const useSmoothScrollToRef = () => {
  const smoothScrollToRef = (targetScrollPosition: number) => {
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth',
    });
  };

  return smoothScrollToRef;
};
