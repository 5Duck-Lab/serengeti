import Spacing from '@/components/Spacing';
import { TEXT } from '@/constants/sectionText';
import styled from 'styled-components';

const Section5 = () => {
  const { number, email, githubLink } = TEXT;
  const onClick = () => {
    window.open(githubLink);
  };
  return (
    <div style={{ position: 'absolute', zIndex: 2, right: 0 }}>
      <Spacing direction="horizontal" size={900} />
      <SectionTitle> Contact Us</SectionTitle>
      <ContactInfo>연락처 : {number}</ContactInfo>
      <ContactInfo>mail : {email}</ContactInfo>
      <ButtonContainer>
        <Button onClick={onClick}>
          <Img src={'/github-mark.png'} />
          <ButtonLabel> {'GIT 바로가기'}</ButtonLabel>
        </Button>
      </ButtonContainer>
      <Spacing size={400} />
    </div>
  );
};

export default Section5;
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
