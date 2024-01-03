import React from 'react';
import styled from 'styled-components';

interface ProgressBarShapeProps {
  children: React.ReactNode;
}

const ProgressBarShape: React.FC<ProgressBarShapeProps> = ({ children }) => {
  return <StyledProgressBarContainer>{children}</StyledProgressBarContainer>;
};

const StyledProgressBarContainer = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  height: 10px;
  margin: 0 -5px;
  width: 100%;
  background-color: grey;
  z-index: 2;
`;

export default ProgressBarShape;
