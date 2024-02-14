import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ProgressBarShapeProps {
  children: React.ReactNode;
}

const breathAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 0.4; }
  100% { opacity: 0.8; }
`;

const ProgressBarShape: React.FC<ProgressBarShapeProps> = ({ children }) => {
  return <StyledProgressBarContainer>{children}</StyledProgressBarContainer>;
};

const StyledProgressBarContainer = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  height: 9px;
  margin: 0 -5px;
  width: 100%;
  background-color: grey;
  border-radius: 5px;
  z-index: 2;
  animation: ${breathAnimation} 3s infinite alternate;
`;

export default ProgressBarShape;
