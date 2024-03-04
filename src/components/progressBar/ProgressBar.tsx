import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';
import { playSmoothScrollToRef } from '@/utils/playSmoothScrollToRef';
import scrollStore from '@/store/scrollStore.ts';
import { observer } from 'mobx-react';

const ProgressBar = () => {
  const smoothScrollToRef = playSmoothScrollToRef();
  const scrollFactor = scrollStore.scrollPosition / scrollStore.maxScroll;
  const cumulativeSums = [0, 0.12, 0.52, 0.8, 0.98]; //[FIXME]: 임시 하드코딩 해둠

  const handleClick = (index: number) => {
    const SCROLL_CORRECTION_FACTOR = 1.01;
    const targetPosition = cumulativeSums[index];
    const totalScrollHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = targetPosition * totalScrollHeight * SCROLL_CORRECTION_FACTOR;

    smoothScrollToRef(scrollTo);
  };

  return (
    <ProgressBarContainer>
      <ProgressBarShape>
        <ProgressBarActive $customwidth={scrollFactor} cumulativeSums={cumulativeSums} />
        <CheckpointsContainer>
          {cumulativeSums.map((_, index) => (
            <BreathingCheckpoint
              key={index}
              checked={scrollFactor >= cumulativeSums[index]}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </CheckpointsContainer>
      </ProgressBarShape>
    </ProgressBarContainer>
  );
};

const CheckpointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -14px;
`;

const BreathingCheckpoint = styled.div<{ checked: boolean; index: number }>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  cursor: pointer;
  z-index: 3;
  opacity: 1;

  transition: background-color 0.5s ease;
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 100px;
  z-index: 1000; // 다른 요소들 위에 표시되도록 z-index 설정
`;

const Observer = observer(ProgressBar);
export default Observer;
