export const playSmoothScrollToRef = () => {
  const smoothScrollToRef = (targetScrollPosition: number) => {
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth',
    });
  };

  return smoothScrollToRef;
};
