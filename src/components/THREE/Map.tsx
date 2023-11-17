import { useGLTFLoader } from '@/hooks/use-loader';

function Map() {
  const { scene } = useGLTFLoader('/models/free_low_poly_forest.glb');

  return <primitive object={scene} />;
}
export default Map;
