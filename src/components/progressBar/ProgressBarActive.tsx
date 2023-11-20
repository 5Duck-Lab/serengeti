import React from 'react';
import styled from 'styled-components';

interface ProgressBarActiveProps {
  scrollFactor: number;
}

const StyledProgressBarActive = styled.div<{ scrollWidth: number }>`
  position: relative;
  width: ${({ scrollWidth }) => scrollWidth * 100}%;
  height: 10px;
  background-color: yellow;
  border-radius: 5px;
  z-index: 1;
`;

const ProgressBarActive: React.FC<ProgressBarActiveProps> = ({ scrollFactor }) => {
  return <StyledProgressBarActive scrollWidth={scrollFactor} />;
};

export default ProgressBarActive;
