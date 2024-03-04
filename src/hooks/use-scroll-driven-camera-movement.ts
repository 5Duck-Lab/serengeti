import { CAMERA_POSITIONS, CameraKey } from '@/constants/cameraPosition.ts';
import { Vector3 } from 'three';
import cameraStore from '@/store/cameraStore';
import opacityStore from '@/store/opacityStore';
import { useScrollPosition } from '@/hooks/use-scroll-position.ts';

interface SceneProps {
  sectionRatio: Record<string, number>;
}

export const useScrollDrivenCameraMovement = ({ sectionRatio }: SceneProps) => {
  useScrollPosition(({ scrollPosition, maxScroll, scrollDirection }) => {
    const scrollFactor = scrollPosition / maxScroll;
    const { startKey, endKey, sectionScrollFactor } = determineCameraKeysAndFactors(scrollFactor, sectionRatio);
    if (startKey === 'fourth' || startKey === 'sixth') {
      opacityStore.addOpacity(-opacityStore.opacity);
    }
    if (startKey === 'fifth') {
      if (scrollDirection === 'down') {
        if (sectionScrollFactor <= 0.5) {
          opacityStore.addOpacity(sectionScrollFactor * 2); // 내려갈 때 opacity 증가
        } else {
          opacityStore.addOpacity(-(sectionScrollFactor - 0.5));
        }
      } else {
        if (sectionScrollFactor >= 0.5) {
          opacityStore.addOpacity((1 - sectionScrollFactor) * 2); // 올라갈 때 opacity 증가
        } else {
          opacityStore.addOpacity(-(1 - sectionScrollFactor)); // 올라갈 면서 opacity 감소
        }
      }
      return;
    }

    // <Important Logic>: Update camera position
    const updatedCameraPosition = new Vector3()
      .copy(CAMERA_POSITIONS[startKey].position)
      .lerp(CAMERA_POSITIONS[endKey].position, sectionScrollFactor);

    cameraStore.setCameraPosition(updatedCameraPosition);
    // 카메라 lookAt 업데이트
    const startLookAt = CAMERA_POSITIONS[startKey].lookAtPosition;
    const endLookAt = CAMERA_POSITIONS[endKey].lookAtPosition;
    const updatedLookAtPosition = startLookAt.clone().lerp(endLookAt, sectionScrollFactor);

    cameraStore.updateLookAtPosition(updatedLookAtPosition);
  });

  return {};
};

/**
 * @description
 * if you want to add new sections,
 * edit this code, not the code above(useScrollDrivenCameraMovement)
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
