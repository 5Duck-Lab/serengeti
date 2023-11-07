import React from 'react';
import styled from 'styled-components';

interface ProgressBarShapeProps {
  children: React.ReactNode;
}

const ProgressBarShape: React.FC<ProgressBarShapeProps> = ({ children }) => {
  return <StyledProgressBar>{children}</StyledProgressBar>;
};

const StyledProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #fff;
  z-index: 1;
  .progress {
    height: 100%;
    background-color: #000;
  }
`;

export default ProgressBarShape;
