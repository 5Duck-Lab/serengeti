import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
// import styled from 'styled-components';

interface ProgressBarProps {
  scrollFactor: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor }) => {
  return (
    <ProgressBarShape>
      <ProgressBarActive scrollFactor={scrollFactor} />
    </ProgressBarShape>
  );
};

export default ProgressBar;
