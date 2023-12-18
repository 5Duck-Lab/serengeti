import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';
import styled from 'styled-components';

const Section9 = () => {
  const { number, email, githubLink } = USER_PROFILE;
  const onClick = () => {
    window.open(githubLink);
  };
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Container>
        <SectionTitle> Contact Us</SectionTitle>
        <ContactInfo>연락처 : {number}</ContactInfo>
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

export default Section9;
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
  height:'100%;
`;
