import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Rainbow = ({ text }: { text: string }) => {
  const shadowRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    shadowRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 0 }, // 시작 지점
        {
          y: -50, // 도착 지점
          repeat: -1, // 무한 반복
          yoyo: true, // 원래 위치로 돌아감
          ease: 'power1.inOut',
          delay: index * 0.1, // 각 그림자에 따라 약간의 지연
          duration: 0.8,
        }
      );
    });
  }, []);

  const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'white'];

  return (
    <TextWrapper>
      {colors.map((color, index) => (
        <ShadowText
          key={color}
          ref={el => el && (shadowRefs.current[index] = el)}
          style={{ textShadow: `2px 2px ${color}` }}
        >
          {text}
        </ShadowText>
      ))}
    </TextWrapper>
  );
};

export default Rainbow;

const TextWrapper = styled.div`
  position: relative;
`;

const Text = styled.span`
  color: white;
  font-size: 80px;
  font-weight: bold;
`;

const ShadowText = styled(Text)`
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;
