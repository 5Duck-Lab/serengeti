import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';
import { playSmoothScrollToRef } from '@/utils/playSmoothScrollToRef'; // 사용자 정의 훅 import

interface ProgressBarProps {
  scrollFactor: number;
  sectionRefs: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor, sectionRefs }) => {
  const smoothScrollToRef = playSmoothScrollToRef(); // 사용자 정의 스무스 스크롤 훅

  const handleClick = (index: number) => {
    const targetPosition = sectionRefs[index];
    const totalScrollHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = targetPosition * totalScrollHeight;
    smoothScrollToRef(scrollTo);
  };

  return (
    <ProgressBarShape>
      <ProgressBarActive scrollFactor={scrollFactor} />
      <CheckpointsContainer>
        {sectionRefs.map((position, index) => (
          <Checkpoint
            key={index}
            checked={index <= scrollFactor * (sectionRefs.length - 1)}
            onClick={() => handleClick(index)}
          />
        ))}
      </CheckpointsContainer>
    </ProgressBarShape>
  );
};

const CheckpointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -17px;
`;

const Checkpoint = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  cursor: pointer;
  z-index: 3;
`;

export default ProgressBar;
