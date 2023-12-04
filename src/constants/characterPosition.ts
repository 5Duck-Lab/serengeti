import { Vector3 } from 'three';

export type CharacterKey = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

export const CHARACTER_POSITIONS: Record<CharacterKey, { position: Vector3; controlPoint: Vector3 }> = {
  first: {
    position: new Vector3(-30.0, -28.0, 160.7),
    controlPoint: new Vector3(-38.0, -28.0, 140.0),
  },
  second: {
    position: new Vector3(-15, -28, 134.0),
    controlPoint: new Vector3(60, -28, 144.0),
  },
  third: {
    position: new Vector3(37, -28, 50),
    controlPoint: new Vector3(10, -28, 60),
  },
  fourth: {
    position: new Vector3(-14, -28, 50),
    controlPoint: new Vector3(-37, -28, 25),
  },
  fifth: {
    position: new Vector3(-32, -28, -4),
    controlPoint: new Vector3(-32, -28, -4),
  },
};
