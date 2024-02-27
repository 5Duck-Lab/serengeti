import { useState } from 'react';
import { CameraKey } from '@/constants/cameraPosition.ts';
import { CHARACTER_POSITIONS } from '@/constants/characterPosition.ts';
import { Vector3, QuadraticBezierCurve3 } from 'three';
import { useScrollPosition } from '@/hooks/use-scroll-position.ts';

interface SceneProps {
  sectionRatio: Record<string, number>;
}

export const useScrollDrivenCharacterMovement = ({ sectionRatio }: SceneProps) => {
  const [characterPosition, setCharacterPosition] = useState(new Vector3().copy(CHARACTER_POSITIONS.first.position));

  useScrollPosition(({ scrollPosition, maxScroll }) => {
    const scrollFactor = scrollPosition / maxScroll;

    // <Important Logic>: 어떤 section 에 위치해있는지를 찾아주는 함수 호출
    const { startKey, endKey, sectionScrollFactor } = determineCameraKeysAndFactors(scrollFactor, sectionRatio);
    if (startKey === 'fourth' || startKey === 'fifth' || startKey === 'sixth' || startKey === 'seventh') {
      return;
    }
    // <Important Logic>: Update camera position
    const curve = new QuadraticBezierCurve3(
      CHARACTER_POSITIONS[startKey].position,
      CHARACTER_POSITIONS[startKey].controlPoint,
      CHARACTER_POSITIONS[endKey].position
    );
    const curvePosition = curve.getPoint(sectionScrollFactor);
    setCharacterPosition(curvePosition);
  });

  return {
    characterPosition: characterPosition,
  };
};

/**
 * @description
 * if you want to add new sections,
 * edit this code, not the code above(useScrollDrivenCharacterMovement)
 */
const determineCameraKeysAndFactors = (scrollFactor: number, sectionRatio: Record<string, number>) => {
  let startKey: CameraKey = 'first';
  let endKey: CameraKey = 'second';
  let sectionStartFactor = 0;
  let sectionEndFactor = sectionRatio.first;

  const section1 = sectionRatio.first;
  const section2 = section1 + sectionRatio.second;
  const section3 = section2 + sectionRatio.third;
  const section4 = section3 + sectionRatio.fourth;
  const section5 = section4 + sectionRatio.fifth;
  const section6 = section5 + sectionRatio.sixth;
  const section7 = section6 + sectionRatio.seventh;
  const section8 = section7 + sectionRatio.eighth;

  if (scrollFactor < section1) {
    startKey = 'first';
    endKey = 'second';
    sectionStartFactor = 0;
    sectionEndFactor = section1;
  } else if (scrollFactor < section2) {
    startKey = 'second';
    endKey = 'third';
    sectionStartFactor = section1;
    sectionEndFactor = section2;
  } else if (scrollFactor < section3) {
    startKey = 'third';
    endKey = 'fourth';
    sectionStartFactor = section2;
    sectionEndFactor = section3;
  } else if (scrollFactor < section4) {
    startKey = 'fourth';
    endKey = 'fifth';
    sectionStartFactor = section3;
    sectionEndFactor = section4;
  } else if (scrollFactor < section5) {
    startKey = 'fifth';
    endKey = 'sixth';
    sectionStartFactor = section4;
    sectionEndFactor = section5;
  } else if (scrollFactor < section6) {
    startKey = 'sixth';
    endKey = 'seventh';
    sectionStartFactor = section5;
    sectionEndFactor = section6;
  } else if (scrollFactor < section7) {
    startKey = 'seventh';
    endKey = 'eighth';
    sectionStartFactor = section6;
    sectionEndFactor = section7;
  } else if (scrollFactor < section8) {
    startKey = 'eighth';
    endKey = 'ninth';
    sectionStartFactor = section7;
    sectionEndFactor = section8;
  } else {
    startKey = 'ninth';
    endKey = 'ninth';
    sectionStartFactor = section8;
    sectionEndFactor = 1;
  }

  const sectionScrollFactor = (scrollFactor - sectionStartFactor) / (sectionEndFactor - sectionStartFactor);

  return {
    startKey,
    endKey,
    sectionScrollFactor,
  };
};
