import Map from './Map';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useScrollDrivenCameraMovement } from '../../hooks/use-scroll-driven-camera-movement.ts';
import Character from './Character';
import { useScrollDrivenCharacterMovement } from '../../hooks/use-scroll-driven-character-movement.ts';

interface SceneProps {
  sectionRatio: Record<string, number>;
}

const Scene: React.FC<SceneProps> = ({ sectionRatio }) => {
  const { position, rotation } = useScrollDrivenCameraMovement({ sectionRatio });
  const { characterPosition } = useScrollDrivenCharacterMovement({ sectionRatio });

  return (
    <>
      <Canvas style={canvasStyle}>
        <PerspectiveCamera makeDefault position={position} rotation={rotation} />
        <Character position={characterPosition} />
        <ambientLight />
        <directionalLight />
        <Map />
      </Canvas>
    </>
  );
};
export default Scene;

const canvasStyle: React.CSSProperties = {
  zIndex: 1,
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  backgroundColor: '#B8F5AE',
};
