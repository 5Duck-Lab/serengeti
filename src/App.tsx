import Scene from '@/components/THREE/Scene';
import Section1 from '@/page/Section1';
import Section2 from '@/page/Section2';
import Section3 from '@/page/Section3';
import Section4 from '@/page/Section4.tsx';
import Section5 from '@/page/Section5.tsx';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styled from 'styled-components';
import LoadingPage from '@/components/LoadingPage.tsx';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import scrollStore from '@/store/scrollStore.ts';

function App() {
  useEffect(() => {
    const scrollEl = document.querySelector('#main-container') as HTMLElement;
    if (!scrollEl) {
      return;
    }

    let lastScrollY = 0;
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.1, // 부드러운 정도: 0 ~ 1
      multiplier: 0.5, // 스크롤 속도(곱해짐)
    });

    locoScroll.on('scroll', args => {
      const direction = args.scroll.y > lastScrollY ? 'down' : 'up';
      scrollStore.setMaxScroll(args.limit.y);
      scrollStore.setScrollPosition(args.scroll.y);
      scrollStore.setScrollDirection(direction);
      lastScrollY = args.scroll.y;
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <>
      <MainWrapper id="main-container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </MainWrapper>
      <Scene />
      <ProgressBar />
      <LoadingPage />
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100vw;
`;
