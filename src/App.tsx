import { useEffect, useRef, useState } from 'react';
import { useSectionRatio } from '@/hooks/use-section-ratio.ts';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import Scene from '@/components/THREE/Scene';
import Section1 from '@/page/Section1';
import Section2 from '@/page/Section2';
import Section3 from '@/page/Section3';
import Section4 from '@/page/Section4';
import Section5 from '@/page/Section5';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styled from 'styled-components';
import Section6 from './page/section6';
import Section7 from './page/section7';
import Section8 from './page/section8';
import Section9 from './page/section9';

interface SectionContainer {
  $scrollbarwidth?: number;
}

function App() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const appRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const section8Ref = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);
  //[TBD] 추후 jotai를 이용한 전역스토어로 변경
  const sectionRatio: Record<string, number> = {
    first: useSectionRatio(appRef, section1Ref),
    second: useSectionRatio(appRef, section2Ref),
    third: useSectionRatio(appRef, section3Ref),
    fourth: useSectionRatio(appRef, section4Ref),
    fifth: useSectionRatio(appRef, section5Ref),
    sixth: useSectionRatio(appRef, section6Ref),
    seventh: useSectionRatio(appRef, section7Ref),
    eighth: useSectionRatio(appRef, section8Ref),
    ninth: useSectionRatio(appRef, section9Ref),
  };

  const sectionRefs: number[] = [
    0,
    sectionRatio.first as number,
    sectionRatio.second as number,
    sectionRatio.third as number,
    sectionRatio.fourth as number,
    sectionRatio.fifth as number,
    sectionRatio.sixth as number,
    sectionRatio.seventh as number,
    sectionRatio.eighth as number,
  ];

  const scrollFactor = useScrollPosition();
  const cumulativeSums = sectionRefs.reduce((acc, val) => {
    const lastSum = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(lastSum + (val as number));
    return acc;
  }, [] as number[]);

  useEffect(() => {
    const outer = document.createElement('div');

    outer.style.overflow = 'scroll';
    outer.style.width = '50px'; // 명시적인 크기 지정
    outer.style.height = '50px';
    document.body.appendChild(outer);

    // 레이아웃 강제 재계산
    outer.getBoundingClientRect();
    const inner = document.createElement('div');
    outer.appendChild(inner);

    const calculatedScrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode?.removeChild(outer);

    setScrollbarWidth(calculatedScrollbarWidth);
  }, []);
  return (
    <MainWrapper $scrollbarwidth={scrollbarWidth} ref={appRef}>
      <SectionContainer ref={section1Ref}>
        <Section1 />
      </SectionContainer>
      <SectionContainer ref={section2Ref}>
        <Section2 />
      </SectionContainer>
      <SectionContainer ref={section3Ref}>
        <Section3 />
      </SectionContainer>
      <SectionContainer ref={section4Ref}>
        <Section4 />
      </SectionContainer>
      <SectionContainer ref={section5Ref}>
        <Section5 />
      </SectionContainer>
      <SectionContainer ref={section6Ref}>
        <Section6 />
      </SectionContainer>
      <SectionContainer ref={section7Ref}>
        <Section7 />
      </SectionContainer>
      <SectionContainer ref={section8Ref}>
        <Section8 />
      </SectionContainer>
      <SectionContainer $scrollbarwidth={scrollbarWidth} ref={section9Ref}>
        <Section9 />
      </SectionContainer>
      {/*계산결과(sectionRatio)를 직접전달, 추후 jotai 적용
        {/*현재는 props drilling 이 너무 심함, App => Scene => useScrollDrivenCameraMovement */}

      {/* <ProgressBar scrollFactor={scrollFactor} /> */}
      <Scene sectionRatio={sectionRatio} />
      <ProgressBar scrollFactor={scrollFactor} cumulativeSums={cumulativeSums} />
    </MainWrapper>
  );
}

export default App;
//  width: ${({ $scrollbarwidth }) => `calc(100vw - ${$scrollbarwidth}px)`};
const MainWrapper = styled.div<SectionContainer>`
  width: 100vw;
  background-color: red;
`;
const SectionContainer = styled.div<SectionContainer>`
  width: calc(100vw - 17px);
  background-color: red;
`;
