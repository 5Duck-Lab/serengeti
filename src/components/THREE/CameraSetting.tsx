import cameraStore from '@/store/cameraStore';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
const CameraSetting = () => {
  const { camera } = useThree();
  useEffect(() => {
    cameraStore.setCamera(camera as THREE.PerspectiveCamera);
  }, [camera]);
  useFrame(() => {
    // const cameraDirection = new THREE.Vector3();
    // camera.getWorldDirection(cameraDirection);
    // // 카메라가 바라보는 위치를 추정합니다.
    // // 여기서는 카메라 위치에서 방향 벡터 방향으로 10 단위만큼 떨어진 위치를 사용합니다.
    // const lookAtDistance = 10;
    // const lookAtPosition = camera.position.clone().add(cameraDirection.multiplyScalar(lookAtDistance));
    // console.log('Camera Position:', camera.position);
    // console.log('LookAt Position:', lookAtPosition);
  });
  return <></>;
};
export default CameraSetting;
