import Scene from '@/components/THREE/Scene';
import Section1 from '@/page/Section1';
import Section2 from '@/page/Section2';
import Section3 from '@/page/Section3';
import Section4 from '@/page/Section4';
import Section5 from '@/page/Section5';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styled from 'styled-components';
import LoadingPage from '@/components/LoadingPage.tsx';
import { getScrollHeight } from '@/hooks/use-scroll-position.ts';
import { useEffect, useState } from 'react';

function App() {
  const [halfHeight, setHalfHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHalfHeight(getScrollHeight() / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MainWrapper>
        <div style={{ height: `${halfHeight}px` }}>
          <Section1 />
          <Section2 />
        </div>
        {/*section3 노션영역은, 무조건 전체스크롤높이의 50%일때 뜸*/}
        <Section3 />
        <Section4 />
        <Section5 />
        {/*계산결과(sectionRatio)를 직접전달, 추후 jotai 적용
        {/*현재는 props drilling 이 너무 심함, App => Scene => useScrollDrivenCameraMovement */}

        {/* <ProgressBar scrollFactor={scrollFactor} /> */}
        <Scene />
        <ProgressBar />
      </MainWrapper>
      <LoadingPage />
    </>
  );
}

export default App;
// width: calc(100vw - ${props => props.$scrollbarWidth}px);
const MainWrapper = styled.div`
  width: 100vw;
`;
