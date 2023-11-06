import React from 'react';
import { useGLTFLoader } from '../../hooks/use-loader';
import { useCharacterAnimation } from '../../hooks/use-animation';
import { Vector3 } from 'three';

interface CharacterProps {
  position?: Vector3;
}

const Character: React.FC<CharacterProps> = ({ position = [-32, -28, -4] }) => {
  const characterUrl = import.meta.env.VITE_GLB_URL as string;
  if (!characterUrl) {
    throw new Error('GLB URL is not defined, set your < .env > file');
  }

  const gltf = useGLTFLoader(characterUrl);
  useCharacterAnimation(gltf);

  return <primitive object={gltf.scene} position={position} scale={[3, 3, 3]} />;
};

export default Character;
