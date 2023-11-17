import React from 'react';
import styled from 'styled-components';

interface ProgressBarShapeProps {
  children: React.ReactNode;
}

const ProgressBarShape: React.FC<ProgressBarShapeProps> = ({ children }) => {
  return <StyledProgressBarContainer>{children}</StyledProgressBarContainer>;
};

const StyledProgressBarContainer = styled.div`
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export default ProgressBarShape;
