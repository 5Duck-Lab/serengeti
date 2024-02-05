import Scene from '@/components/THREE/Scene';
import Section1 from '@/page/Section1';
import Section2 from '@/page/Section2';
import Section3 from '@/page/Section3';
import Section4 from '@/page/Section4.tsx';
import Section5 from '@/page/Section5.tsx';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styled from 'styled-components';
import LoadingPage from '@/components/LoadingPage.tsx';

function App() {
  return (
    <>
      <MainWrapper>
        <Section1 />
        <Section2 />

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

const MainWrapper = styled.div`
  width: 100vw;
`;
