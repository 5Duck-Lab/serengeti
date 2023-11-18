import Spacing from '@/components/Spacing';
import { TEXT } from '@/constants/sectionText';
import styled from 'styled-components';

const Section1 = () => {
  //Title Page
  const { title, aboutMe } = TEXT;

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <SectionTitle> {title}</SectionTitle>
      <Content>{aboutMe}</Content>
      <ScrollPrompt>Scroll to Break The Frame</ScrollPrompt>
      <Spacing size={1000} />
    </div>
  );
};

export default Section1;
const SectionTitle = styled.h1`
  color: #fffdd0;
`;
const Content = styled.h2`
  color: #fffdd0;
  white-space: pre-wrap;
`;

const ScrollPrompt = styled.h2`
  color: #fffdd0;
`;
