import { useState, useEffect } from 'react';
import styled from 'styled-components';
interface TypingAnimationProps {
  text: string;
  speed: number;
}
const TypingAnimation = ({ text, speed }: TypingAnimationProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setContent(c => c + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [text, speed]);

  return <Content>{content}</Content>;
};

const Content = styled.div`
  color: #fffdd0;
  white-space: pre-wrap;
`;
export default TypingAnimation;
