import Map from '@/components/THREE/Map';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useScrollDrivenCameraMovement } from '@/hooks/use-scroll-driven-camera-movement.ts';
import Character from '@/components/THREE/Character';
import { useScrollDrivenCharacterMovement } from '@/hooks/use-scroll-driven-character-movement.ts';
import { useCharacterRotation } from '@/hooks/use-character-rotation.ts';

interface SceneProps {
  sectionRatio: Record<string, number>;
}

const Scene: React.FC<SceneProps> = ({ sectionRatio }) => {
  const { position, rotation } = useScrollDrivenCameraMovement({ sectionRatio });
  const { characterPosition } = useScrollDrivenCharacterMovement({ sectionRatio });
  const characterRotation = useCharacterRotation(characterPosition);

  return (
    <Canvas shadows flat style={canvasStyle}>
      <PerspectiveCamera makeDefault position={position} rotation={rotation} />
      <Character position={characterPosition} rotation={characterRotation} />
      <ambientLight />
      <directionalLight
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        position={[10, 18, 11.5]}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      <Map />
    </Canvas>
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
