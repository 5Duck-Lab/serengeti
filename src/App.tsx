import { useRef } from 'react';
import { useSectionRatio } from './hooks/use-section-ratio.ts';
import { useScrollPosition } from './hooks/use-scroll-position';
import Scene from './components/THREE/Scene';
import Section1 from './page/Section1';
import Section2 from './page/Section2';
import Section3 from './page/Section3';
import Section4 from './page/Section4';
import Section5 from './page/Section5';
import ProcessBar from './components/processBar/ProcessBar.tsx';
import './App.css';

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  //[TBD] 추후 jotai를 이용한 전역스토어로 변경
  const sectionRatio: Record<string, number> = {
    first: useSectionRatio(appRef, section1Ref),
    second: useSectionRatio(appRef, section2Ref),
    third: useSectionRatio(appRef, section3Ref),
    fourth: useSectionRatio(appRef, section4Ref),
    fifth: useSectionRatio(appRef, section5Ref),
  };

  const scrollFactor = useScrollPosition();

  return (
    <div ref={appRef}>
      <div ref={section1Ref}>
        <ProcessBar scrollFactor={scrollFactor} />
        <Section1 />
      </div>
      <div ref={section2Ref}>
        <Section2 />
      </div>
      <div ref={section3Ref}>
        <Section3 />
      </div>
      <div ref={section4Ref}>
        <Section4 />
      </div>
      <div ref={section5Ref}>
        <Section5 />
      </div>
      {/*계산결과(sectionRatio)를 직접전달, 추후 jotai 적용*/}
      {/*현재는 props drilling 이 너무 심함, App => Scene => useScrollDrivenCameraMovement */}
      <Scene sectionRatio={sectionRatio} />
    </div>
  );
}

export default App;
