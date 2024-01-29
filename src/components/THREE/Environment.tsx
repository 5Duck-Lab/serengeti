import * as THREE from 'three';
import { Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three-stdlib';

const SceneEnvironment = () => {
  const texturePath = '/hdri/sunsetLight.hdr';
  const texture = useLoader(RGBELoader, texturePath);

  return (
    <group name="environment">
      <Environment>
        <mesh rotation={[0, 90 * (Math.PI / 180), 0]} scale={100}>
          <sphereGeometry />
          <meshBasicMaterial transparent opacity={0.25} map={texture} side={THREE.BackSide} toneMapped={false} />
        </mesh>
      </Environment>
    </group>
  );
};

export default SceneEnvironment;
