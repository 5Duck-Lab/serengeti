import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';
import { playSmoothScrollToRef } from '@/utils/playSmoothScrollToRef';
// import sectionRatioStore from '@/store/sectionRatio.store.ts';
import { useScrollPosition } from '@/hooks/use-scroll-position.ts';

const ProgressBar = () => {
  const smoothScrollToRef = playSmoothScrollToRef();
  const scrollFactor = useScrollPosition();

  // const cumulativeSums = sectionRatioStore.cumulativeSums;
  const cumulativeSums = [0, 0.2, 0.4, 0.7, 1]; //[FIXME]: 임시 하드코딩 해둠

  const handleClick = (index: number) => {
    const SCROLL_CORRECTION_FACTOR = 1.01;
    const targetPosition = cumulativeSums[index];
    const totalScrollHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    console.log(totalScrollHeight);
    const scrollTo = targetPosition * totalScrollHeight * SCROLL_CORRECTION_FACTOR;

    smoothScrollToRef(scrollTo);
  };

  return (
    <ProgressBarContainer>
      <ProgressBarShape>
        <ProgressBarActive $customwidth={scrollFactor} cumulativeSums={cumulativeSums} />
        <CheckpointsContainer>
          {cumulativeSums.map((_, index) => (
            <Checkpoint
              key={index}
              checked={scrollFactor >= cumulativeSums[index]}
              onClick={() => handleClick(index)}
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
  top: -17px;
`;

const Checkpoint = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  cursor: pointer;
  z-index: 3;
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 100px;
  z-index: 1000; // 다른 요소들 위에 표시되도록 z-index 설정
`;

export default ProgressBar;
