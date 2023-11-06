import { Vector3 } from 'three';

export type CharacterKey = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

export const CHARACTER_POSITIONS: Record<CharacterKey, { position: Vector3 }> = {
  first: {
    position: new Vector3(-34.0, -28.0, 160.7),
  },
  second: {
    position: new Vector3(-15, -28, 130.9),
  },
  third: {
    position: new Vector3(36, -28, 60),
  },
  fourth: {
    position: new Vector3(-14, -28, 50),
  },
  fifth: {
    position: new Vector3(-32, -28, -4),
  },
};
