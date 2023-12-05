import React from 'react';
import styled from 'styled-components';

interface ProgressBarActiveProps {
  $customwidth: number; // 변경된 prop 이름
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

const ProgressBarActive: React.FC<ProgressBarActiveProps> = ({ $customwidth }) => {
  return <StyledProgressBarActive $customwidth={$customwidth} />;
};

export default ProgressBarActive;
