import Spacing from '@/components/Spacing';
import { USER_PROFILE } from '@/constants/useProfile';

import styled from 'styled-components';

const Section2 = () => {
  const { name, education, techStack, career, field } = USER_PROFILE;

  return (
    <Wrapper>
      <Spacing size={1000} />
      <RightContent>
        <SectionTitle> About Me</SectionTitle>
        <Content>이름 : {name}</Content>
        <Content>학력 : {education}</Content>
        <Content>직군 : {field}</Content>
        <Content>기술 스택 : {techStack}</Content>
        <Content>경력 : {career}</Content>
      </RightContent>

      <Spacing size={1000} />
    </Wrapper>
  );
};

export default Section2;
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;
const SectionTitle = styled.h1`
  color: #fffdd0;
`;
const Content = styled.h2`
  color: #fffdd0;
  white-space: pre-wrap;
`;
const RightContent = styled.div`
  position: absolute;
  width: 50%;

  right: 0;
`;
