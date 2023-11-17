import { Vector3, Euler } from 'three';

const calculateRotationFromDirection = (direction: Vector3): Euler => {
  if (direction.lengthSq() === 0) {
    return new Euler(0, 0, 0);
  } // 이동하지 않았다면 회전하지 않음

  const yRotationAngle = Math.atan2(direction.x, direction.z);
  return new Euler(0, yRotationAngle, 0); // Y축을 중심으로 회전
};

export { calculateRotationFromDirection };
