import React from 'react';
import styled from 'styled-components';

const ProgressBarShape: React.FC = () => {
  return <StyledProgressBar />;
};

const StyledProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #fff;
  z-index: 9990;
  .progress {
    height: 100%;
    background-color: #000;
  }
`;

export default ProgressBarShape;
