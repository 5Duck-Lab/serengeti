import Scene from '@/components/THREE/Scene';
import Section1 from '@/page/Section1';
import Section2 from '@/page/Section2';
import Section3 from '@/page/Section3';
import Section4 from '@/page/Section4.tsx';
import Section5 from '@/page/Section5.tsx';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styled from 'styled-components';
import LoadingPage from '@/components/LoadingPage.tsx';
import { useEffect, useState } from 'react';
import { getScrollHeight } from '@/hooks/use-scroll-position.ts';

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
        <Section3 />
        <Section4 />
        <Section5 />
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
  background-color: red;
`;
// const SectionContainer = styled.div<SectionContainer>`
//   width: calc(100vw - 17px);
//   background-color: red;
// `;
