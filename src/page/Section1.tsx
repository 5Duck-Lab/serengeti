import Spacing from '@/components/Spacing';
import { useSectionText } from '@/hooks/use-section-text';
import { TEXT } from '@/constants/sectionText';
import styled, { keyframes } from 'styled-components';
import TypingAnimation from '@/components/TypingAnimation';
const Section1 = () => {
  //Title Page
  const { title } = useSectionText({ TEXT });
  const text =
    '안녕하세요, 저는 Serengeti 개발자 유진하입니다.\n지금부터 제 소개를 시작해볼까 합니다.\n저에 대해 더 알고 싶으시다면\nScroll을 내려주세요.';
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <SectionTitle> {title}</SectionTitle>
      <Content>{text}</Content>
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
const blinkAnimation = keyframes`
from {
  opacity: 1;
}

to {
  opacity: 0.0;
}
`;

const ScrollPrompt = styled.h2`
  color: #fffdd0;
  animation: ${blinkAnimation} 1s linear infinite; // 1초 간격으로 무한 반복
`;
