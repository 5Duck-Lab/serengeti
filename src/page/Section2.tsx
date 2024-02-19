import Spacing from '@/components/Spacing.tsx';
import { USER_PROFILE } from '@/constants/useProfile';
import TechStackIcon from '@/components/techStackIcon';
import styled from 'styled-components';
import Rainbow from '@/components/Rainbow.tsx';
import { useOnScreen } from '@/hooks/use-on-screen.ts';
import { useRef } from 'react';

const Section2 = () => {
  const { name, education, techStack, career, field } = USER_PROFILE;
  const sectionRef = useRef<HTMLDivElement>(null);
  useOnScreen(sectionRef, 'skillSet', {
    root: null,
    rootMargin: '0px',
    threshold: [0.4, 0.6],
  });
  return (
    <Wrapper ref={sectionRef} id="section2">
      <RightContent>
        <Rainbow text={'About Me'} />
        <Spacing direction="vertical" size={100} />
        <WhiteBar />
        <Content>이름 : {name}</Content>
        <Content>학력 : {education}</Content>
        <Content>직군 : {field}</Content>
        <Content>기술 스택: </Content>
        <TechStackIcon techs={techStack} />
        <Content>경력 : {career}</Content>
      </RightContent>
    </Wrapper>
  );
};

export default Section2;
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const WhiteBar = styled.div`
  width: 80%;
  height: 5px;
  background-color: white;
`;

const Content = styled.span`
  color: #fffdd0;
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  line-height: 1.5;
`;
const RightContent = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
`;
