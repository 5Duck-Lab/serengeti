import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import styled from 'styled-components';
import { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen.ts';

const Section5 = () => {
  const { number, email, githubLink } = USER_PROFILE;
  const sectionRef = useRef<HTMLDivElement>(null);
  useOnScreen(sectionRef, 'contact', {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const onClick = () => {
    window.open(githubLink);
  };

  return (
    <div style={{ position: 'relative', zIndex: 2 }} id="section5">
      <Container>
        <SectionTitle className="text-shadow-black"> Contact Us</SectionTitle>
        <dl>
          <ContactInfoTitle className="text-shadow-black" ref={sectionRef}>
            Phone
          </ContactInfoTitle>
          <ContactInfo className="text-shadow-red">{number}</ContactInfo>
        </dl>
        <dl>
          <ContactInfoTitle className="text-shadow-black">mail</ContactInfoTitle>
          <ContactInfo className="text-shadow-red">{email}</ContactInfo>
        </dl>
        <ButtonContainer>
          <Button onClick={onClick}>
            <Img src={'/github-mark.png'} />
            <ButtonLabel> {'GIT 바로가기'}</ButtonLabel>
          </Button>
        </ButtonContainer>
      </Container>
      <Spacing size={450} />
    </div>
  );
};

export default Section5;
const Container = styled.div`
  position: absolute;
  z-index: 3;
  right: 60%;
`;
const SectionTitle = styled.strong`
  font-size: min(7vw, 120px);
  color: #fffdd0;
`;
const ContactInfoTitle = styled.dt`
  font-size: min(3vw, 60px);
  font-weight: 700;
  color: #fffdd0;
`;

const ContactInfo = styled.dd`
  font-size: min(2.5vw, 50px);
  font-weight: 300;
  color: #fffeee;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: #fffdd0;
  &:focus {
    outline: none;
  }
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const ButtonLabel = styled.span`
  width: 100px;
  height: 100%;
`;
