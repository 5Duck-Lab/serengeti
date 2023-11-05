import styled from 'styled-components';

interface ProcessBarActiveProps {
  scrollFactor: number;
}

const ProcessBarActive: React.FC<ProcessBarActiveProps> = ({ scrollFactor }) => {
  return <StyledActiveProcessBar scrollWidth={scrollFactor} />;
};

const StyledActiveProcessBar = styled.div<{ scrollWidth: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ scrollWidth }) => scrollWidth * 100}%;
  height: 10px;
  background-color: yellow;
  z-index: 9991;
`;

export default ProcessBarActive;
