import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';

interface ProgressBarProps {
  scrollFactor: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor }) => {
  return (
    <>
      <ProgressBarShape />
      <ProgressBarActive scrollFactor={scrollFactor} />
    </>
  );
};

export default ProgressBar;
