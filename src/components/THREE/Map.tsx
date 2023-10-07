import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Map() {
  const { scene } = useLoader(GLTFLoader, '/models/free_low_poly_forest.glb');
  return (
    <>
      <primitive object={scene}></primitive>
    </>
  );
}
export default Map;
