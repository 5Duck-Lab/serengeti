import React from 'react';
import ProcessBarShape from './ProcessBarShape';
import ProcessBarActive from './ProcessBarActive';

interface ProcessBarProps {
  scrollFactor: number;
}

const ProcessBar: React.FC<ProcessBarProps> = ({ scrollFactor }) => {
  return (
    <>
      <ProcessBarShape />
      <ProcessBarActive scrollFactor={scrollFactor} />
    </>
  );
};

export default ProcessBar;
