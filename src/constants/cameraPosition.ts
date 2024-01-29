import { Vector3, Euler } from 'three';

export type CameraKey = 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh' | 'eighth' | 'ninth';

export const CAMERA_POSITIONS: Record<CameraKey, { position: Vector3; lookAtPosition: Vector3 }> = {
  first: {
    position: new Vector3(-35.0, -24.0, 175.7),
    lookAtPosition: new Vector3(0.0, 0.0, 0.0),
  },
  second: {
    position: new Vector3(-38.4, -21.6, 137.9),
    lookAtPosition: new Vector3(-15, -28, 134.0),
  },
  third: {
    position: new Vector3(36.215, -21.231, 129.31),
    lookAtPosition: new Vector3(38.746, -21.416, 119.644),
  },
  fourth: {
    position: new Vector3(17.802, -18.304, 63.601),
    lookAtPosition: new Vector3(21.573, -19.081, 54.372),
  },
  fifth: {
    position: new Vector3(35.189, -24.1293, 47.416),
    lookAtPosition: new Vector3(39.98, -23.786, 38.645),
  },
  sixth: {
    position: new Vector3(35.189, -24.1293, 47.416),
    lookAtPosition: new Vector3(39.98, -23.786, 38.645),
  },
  seventh: {
    position: new Vector3(17.802, -18.304, 63.601),
    lookAtPosition: new Vector3(21.573, -19.081, 54.372),
  },
  eighth: {
    position: new Vector3(15.8, -16.2636, 68.1966),
    lookAtPosition: new Vector3(7.506, -18.28, 62.9864),
  },
  ninth: {
    position: new Vector3(-36.148, -22.707, 24.5453),
    lookAtPosition: new Vector3(-35.699, -22.694, 14.555),
  },
};
