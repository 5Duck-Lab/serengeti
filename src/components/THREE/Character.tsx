import React from 'react';
import { useGLTFLoader } from '@/hooks/use-loader';
import { useCharacterAnimation } from '@/hooks/use-animation';
import { Vector3, Euler } from 'three';

interface CharacterProps {
  position?: Vector3;
  rotation?: Euler;
}

const Character: React.FC<CharacterProps> = ({
  position = new Vector3(-32, -28, -4),
  rotation = new Euler(0, 0, 0),
}) => {
  const characterUrl = import.meta.env.VITE_GLB_URL as string;
  if (!characterUrl) {
    throw new Error('GLB URL is not defined, set your < .env > file');
  }

  const gltf = useGLTFLoader(characterUrl);
  useCharacterAnimation(gltf);

  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={[1.5, 1.5, 1.5]} />;
};

export default Character;
