import React from 'react';
import styled from 'styled-components';

interface ProgressBarActiveProps {
  $customwidth: number; // 변경된 prop 이름
  cumulativeSums: number[];
}

const StyledProgressBarActive = styled.div.attrs<{ $customwidth: number }>(({ $customwidth }) => ({
  style: {
    width: `${$customwidth * 100}%`,
  },
}))<{ $customwidth: number }>`
  position: relative;
  height: 10px;
  background-color: yellow;
  z-index: 1;
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
