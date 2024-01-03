import { observable } from 'mobx';
import { Vector3, PerspectiveCamera, Euler } from 'three';
const cameraStore = observable({
  camera: null as PerspectiveCamera | null,
  lookAtPosition: new Vector3(0, 0, 0), // 기본 LookAt 위치

  setCamera(camera: PerspectiveCamera) {
    this.camera = camera;
    this.camera.position.set(-35, -24, 175.7); // 카메라의 현재 위치 초기화
    this.lookAtPosition = new Vector3(); // 카메라의 현재 LookAt 위치 초기화
  },
  setCameraPosition(newPosition: Vector3) {
    this.camera?.position.copy(newPosition);
  },
  setCameraRotation(newRotation: Euler) {
    this.camera?.rotation.copy(newRotation);
  },
  updateLookAtPosition(newPosition: Vector3) {
    this.lookAtPosition.copy(newPosition);
    if (this.camera) {
      this.camera.lookAt(newPosition);
    }
  },
});
export default cameraStore;
