import Map from './Map';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Euler, Vector3 } from 'three';

const Scene = () => {
  const position = new Vector3(-35.233871165688605, -24.030254877543264, 185.7260720836389);
  const rotation = new Euler(0.1287806047801396, -0.1853436978655533, 0.0248930638674566);

  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh', position: 'fixed', left: 0, top: 0, backgroundColor: '#B8F5AE' }}
      >
        <PerspectiveCamera makeDefault position={position} rotation={rotation} />
        <ambientLight />
        <directionalLight />
        <OrbitControls />
        <Map />
      </Canvas>
    </>
  );
};
export default Scene;
