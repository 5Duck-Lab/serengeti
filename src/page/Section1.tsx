import styled from 'styled-components';
import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import ScrollSlideText from '@/components/ScrollSlideText';

const Section1 = () => {
  // Title Page
  const { title, aboutMe } = USER_PROFILE;

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
