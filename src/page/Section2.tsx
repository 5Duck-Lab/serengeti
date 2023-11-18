import Spacing from '@/components/Spacing';
import { TEXT } from '@/constants/sectionText';
import styled from 'styled-components';

const Section2 = () => {
  const { name, education, techStack, career, field } = TEXT;
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Spacing size={1000} />
      <SectionTitle> About Me</SectionTitle>
      <Content>이름 : {name}</Content>
      <Content>학력 : {education}</Content>
      <Content>직군 : {field}</Content>
      <Content>기술 스택 : {techStack}</Content>
      <Content>경력 : {career}</Content>
      <Spacing size={1000} />
    </div>
  );
};

export default Section2;
const SectionTitle = styled.h1`
  color: #fffdd0;
`;
const Content = styled.h2`
  color: #fffdd0;
  white-space: pre-wrap;
`;
