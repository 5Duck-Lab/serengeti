import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import ScrollSlideText from '@/components/ScrollSlideText';
import styled from 'styled-components';
import { useOnScreen } from '@/hooks/use-on-screen.ts';
import { useRef } from 'react';

const Section1 = () => {
  // Title Page
  const { title, aboutMe } = USER_PROFILE;
  const sectionRef = useRef<HTMLDivElement>(null);
  useOnScreen(sectionRef, '', {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const splittedAboutMe = aboutMe.split('\n');
  const aboutMeLineCount = aboutMe.split('\n').length;
  const ABOUTME_ANIMATION_DURATION = 0.35;

  return (
    <Container id="section1">
      <ScrollSlideText text={title} style={titleStyle} direction="up" />
      <div ref={sectionRef}></div>
      {splittedAboutMe.map((line, index) => (
        <ScrollSlideText
          key={index}
          text={line}
          style={aboutMeLineStyle}
          direction="left"
          duration={ABOUTME_ANIMATION_DURATION * ((index + 1) / aboutMeLineCount)}
        />
      ))}
      <Spacing size={1000} />
    </Container>
  );
};

export default Section1;

const Container = styled.div`
  position: relative;
  z-index: 2;
`;

const titleStyle = {
  paddingLeft: '20px',
  fontSize: '100px',
  color: '#fffdd0',
  fontWeight: '500',
};

const aboutMeLineStyle = {
  paddingLeft: '20px',
  fontSize: '24px',
  color: '#fff',
  fontWeight: 'bold',
};
