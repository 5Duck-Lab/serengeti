import { Vector3, Euler } from 'three';

export type CameraKey = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

export const CAMERA_POSITIONS: Record<CameraKey, { position: Vector3; rotation: Euler }> = {
  first: {
    position: new Vector3(-35.0, -24.0, 175.7),
    rotation: new Euler(0.1, -0.1, 0.2),
  },
  second: {
    position: new Vector3(-38.4, -21.6, 137.9),
    rotation: new Euler(0.2, -1.1, 0.1),
  },
  third: {
    position: new Vector3(52.1, -20.5, 89.9),
    rotation: new Euler(0, 0.5, 0),
  },
  fourth: {
    position: new Vector3(13.8, -16.9, 68.1),
    rotation: new Euler(-0.1, 0.8, 0.1),
  },
  fifth: {
    position: new Vector3(-33.6, -13.4, 22.3),
    rotation: new Euler(-0.2, -0.3, 0),
  },
};
