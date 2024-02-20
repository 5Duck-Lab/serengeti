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
        <SectionTitle> Contact Us</SectionTitle>
        <ContactInfo ref={sectionRef}>연락처 : {number}</ContactInfo>
        <ContactInfo>mail : {email}</ContactInfo>
        <ButtonContainer>
          <Button onClick={onClick}>
            <Img src={'/github-mark.png'} />
            <ButtonLabel> {'GIT 바로가기'}</ButtonLabel>
          </Button>
        </ButtonContainer>
      </Container>
      <Spacing size={550} />
    </div>
  );
};

export default Section5;
const Container = styled.div`
  position: absolute;
  z-index: 3;
  left: 60%;
`;
const SectionTitle = styled.h1`
  color: #fffdd0;
`;
const ContactInfo = styled.h3`
  color: #fffdd0;
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
