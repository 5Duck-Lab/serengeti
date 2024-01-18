import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';
import { playSmoothScrollToRef } from '@/utils/playSmoothScrollToRef';

interface ProgressBarProps {
  scrollFactor: number;
  cumulativeSums: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor, cumulativeSums }) => {
  const smoothScrollToRef = playSmoothScrollToRef();

  const handleClick = (index: number) => {
    const SCROLL_CORRECTION_FACTOR = 1.01;
    const targetPosition = cumulativeSums[index];
    const totalScrollHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = targetPosition * totalScrollHeight * SCROLL_CORRECTION_FACTOR;

    smoothScrollToRef(scrollTo);
  };

  return (
    <ProgressBarContainer>
      <ProgressBarShape>
        <ProgressBarActive $customwidth={scrollFactor} cumulativeSums={cumulativeSums} />
        <CheckpointsContainer>
          {cumulativeSums.map((_, index) => (
            <Checkpoint
              key={index}
              checked={scrollFactor >= cumulativeSums[index]}
              onClick={() => handleClick(index)}
            />
          ))}
        </CheckpointsContainer>
      </ProgressBarShape>
    </ProgressBarContainer>
  );
};

const CheckpointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -15px;
`;

const Checkpoint = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  cursor: pointer;
  z-index: 3;
  opacity: ${({ checked }) => (checked ? 1.0 : 0.5)};
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  z-index: 1000; // 다른 요소들 위에 표시되도록 z-index 설정
`;

export default ProgressBar;
