import React, { useRef } from 'react';
import { useGLTFLoader } from '@/hooks/use-loader';
import { Vector3, Euler } from 'three';

import * as THREE from 'three';
interface InformationBoardProps {
  position?: Vector3;
  rotation?: Euler;
}

const InformationBoard: React.FC<InformationBoardProps> = ({
  position = new Vector3(37, -28, 45),
  rotation = new Euler(0, -0.5, 0),
}) => {
  const ref = useRef<THREE.Group>(null);

  const InformationBoardUrl = import.meta.env.VITE_BOARD_GLB_URL as string;
  if (!InformationBoardUrl) {
    throw new Error('GLB URL is not defined, set your < .env > file');
  }

  const gltf = useGLTFLoader(InformationBoardUrl);

  return <primitive ref={ref} object={gltf.scene} position={position} rotation={rotation} scale={[2, 2, 2]} />;
};

export default InformationBoard;
