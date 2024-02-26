import styled from 'styled-components';
import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import ScrollSlideText from '@/components/ScrollSlideText';
import { useOnScreen } from '@/hooks/use-on-screen.ts';
import { useRef } from 'react';

const Section1 = () => {
  // Title Page
  const { title, aboutMe } = USER_PROFILE;
  const sectionRef = useRef<HTMLDivElement>(null);
  useOnScreen(sectionRef, '', {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.5],
  });

  const splittedAboutMe = aboutMe.split('\n');
  const aboutMeLineCount = aboutMe.split('\n').length;
  const ABOUTME_ANIMATION_DURATION = 0.35;

  return (
    <Container>
      <ScrollSlideText text={title} style={titleStyle} direction="up" />
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
  fontFamily: 'Arial, sans-serif',
  paddingLeft: '20px',
  fontSize: '100px',
  fontWeight: 'bold',
  color: 'transparent',
  background: 'none',
  backgroundImage: 'linear-gradient(to right top, #00ff99, #00ff00, #00ff99)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  webkitTextStroke: '1px black ',
};

const aboutMeLineStyle = {
  fontFamily: 'Arial, sans-serif',
  paddingLeft: '20px',
  fontSize: '24px',
  color: '#fffdd0',
  fontWeight: 'bold',
  webkitTextStroke: '0.5px black ',
};
