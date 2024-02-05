import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ProgressBarActiveProps {
  $customwidth: number; // 변경된 prop 이름
  cumulativeSums: number[];
}

const breathAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 0.4; }
  100% { opacity: 0.8; }
`;

const StyledProgressBarActive = styled.div.attrs<{ $customwidth: number }>(({ $customwidth }) => ({
  style: {
    width: `calc(${$customwidth * 100}% - 6px)`, // 여백을 추가하여 전체 너비에서 6px를 빼줍니다 (양쪽에 3px씩).
    margin: '0 3px', // 좌우 여백을 3px로 설정합니다.
    opacity: 0.8,
  },
}))<{ $customwidth: number }>`
  position: relative;
  height: 10px;
  background-color: yellow;
  z-index: 1;
  animation: ${breathAnimation} 3s infinite alternate; // 애니메이션 적용
`;

const calculateWidth = (scrollFactor: number, cumulativeSums: number[]) => {
  for (let i = 0; i < cumulativeSums.length - 1; i++) {
    if (scrollFactor >= cumulativeSums[i] && scrollFactor <= cumulativeSums[i + 1]) {
      const progressInSegment = (scrollFactor - cumulativeSums[i]) / (cumulativeSums[i + 1] - cumulativeSums[i]);
      return (i + progressInSegment) / (cumulativeSums.length - 1);
    }
  }
  return 1;
};

const ProgressBarActive: React.FC<ProgressBarActiveProps> = ({ $customwidth, cumulativeSums }) => {
  const calculatedWidth = calculateWidth($customwidth, cumulativeSums);

  return <StyledProgressBarActive $customwidth={calculatedWidth} />;
};

export default ProgressBarActive;
