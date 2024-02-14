import { Vector3 } from 'three';

export type CharacterKey = 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh' | 'eighth' | 'ninth';

export const CHARACTER_POSITIONS: Record<CharacterKey, { position: Vector3; controlPoint: Vector3 }> = {
  first: {
    position: new Vector3(-30.0, -28.0, 160.7),
    controlPoint: new Vector3(-38.0, -28.0, 140.0),
  },
  second: {
    position: new Vector3(-15, -28, 134.0),
    controlPoint: new Vector3(30, -28, 140.0),
  },
  third: {
    position: new Vector3(50, -28, 117),
    controlPoint: new Vector3(30, -28, 60),
  },
  fourth: {
    position: new Vector3(32, -28, 52),
    controlPoint: new Vector3(-37, -28, 25),
  },
  fifth: {
    position: new Vector3(32, -28, 52),
    controlPoint: new Vector3(-37, -28, 25),
  },
  sixth: {
    position: new Vector3(32, -28, 52),
    controlPoint: new Vector3(-37, -28, 25),
  },
  seventh: {
    position: new Vector3(32, -28, 52),
    controlPoint: new Vector3(-37, -28, 25),
  },
  eighth: {
    position: new Vector3(7.506, -28, 62.9864),
    controlPoint: new Vector3(-32.506, -28, 45.9864),
  },
  ninth: {
    position: new Vector3(-32, -28, -4),
    controlPoint: new Vector3(-32, -28, -4),
  },
};
