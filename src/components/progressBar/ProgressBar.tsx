import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';

interface ProgressBarProps {
  scrollFactor: number;
}

const fileNames = ['file1', 'file2', 'file3', 'file4', 'file5'];

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor }) => {
  return (
    <ProgressBarShape>
      <ProgressBarActive $customwidth={scrollFactor} />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', top: '-17px' }}>
        {fileNames.map((fileName, index) => (
          <Checkpoint key={index} checked={index <= scrollFactor * (fileNames.length - 1)} />
        ))}
      </div>
    </ProgressBarShape>
  );
};

const Checkpoint = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  z-index: 3;
`;

export default ProgressBar;
