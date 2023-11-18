import { useState, useEffect } from 'react';
import { Vector3, Euler } from 'three';
import { calculateRotationFromDirection } from '@/utils/calculateRotationFromDirection.ts';

export const useCharacterRotation = (currentPosition: Vector3): Euler => {
  const [prevPosition, setPrevPosition] = useState(currentPosition);
  const [characterRotation, setCharacterRotation] = useState(new Euler(0, 0, 0));

  useEffect(() => {
    if (!prevPosition.equals(currentPosition)) {
      const direction = new Vector3().subVectors(currentPosition, prevPosition);
      const newRotation = calculateRotationFromDirection(direction);
      setCharacterRotation(newRotation);
      setPrevPosition(currentPosition.clone());
    }
  }, [currentPosition, prevPosition]);

  return characterRotation;
};
