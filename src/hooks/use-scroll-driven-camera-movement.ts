import { useEffect, useState } from 'react';
import { useScrollPosition } from './use-scroll-position.ts';
import { CAMERA_POSITIONS, CameraKey } from '../constants/cameraPosition.ts';
import { Vector3, Euler } from 'three';

interface SceneProps {
  sectionRatio: Record<string, number>;
}

export const useScrollDrivenCameraMovement = ({ sectionRatio }: SceneProps) => {
  const scrollFactor = useScrollPosition();
  const [cameraPosition, setCameraPosition] = useState(new Vector3().copy(CAMERA_POSITIONS.first.position));
  const [cameraRotation, setCameraRotation] = useState(new Euler().copy(CAMERA_POSITIONS.first.rotation));

  useEffect(() => {
    const handleScroll = () => {
      // <Important Logic>: 어떤 section 에 위치해있는지를 찾아주느 함수 호출
      const { startKey, endKey, sectionScrollFactor } = determineCameraKeysAndFactors(scrollFactor, sectionRatio);

      // <Important Logic>: Update camera position
      const updatedCameraPosition = new Vector3()
        .copy(CAMERA_POSITIONS[startKey].position)
        .lerp(CAMERA_POSITIONS[endKey].position, sectionScrollFactor);
      setCameraPosition(updatedCameraPosition);

      // <Important Logic>: Update camera rotation
      const startRotationVec = new Vector3().setFromEuler(CAMERA_POSITIONS[startKey].rotation);
      const endRotationVec = new Vector3().setFromEuler(CAMERA_POSITIONS[endKey].rotation);
      const updatedCameraRotationVec = startRotationVec.lerp(endRotationVec, sectionScrollFactor);
      setCameraRotation(new Euler().setFromVector3(updatedCameraRotationVec));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollFactor, sectionRatio]);

  return {
    position: cameraPosition,
    rotation: cameraRotation,
  };
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
  } else {
    startKey = 'fifth';
    endKey = 'fifth';
    sectionStartFactor = section4;
    sectionEndFactor = 1;
  }

  const sectionScrollFactor = (scrollFactor - sectionStartFactor) / (sectionEndFactor - sectionStartFactor);

  return {
    startKey,
    endKey,
    sectionScrollFactor,
  };
};