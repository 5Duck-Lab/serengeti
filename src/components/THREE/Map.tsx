import { useGLTFLoader } from '@/hooks/use-loader';

function Map() {
  const mapURL = import.meta.env.VITE_MAP_URL as string;
  const { scene } = useGLTFLoader(mapURL);

  return <primitive object={scene} />;
}
export default Map;
