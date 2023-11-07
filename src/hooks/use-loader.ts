import { ObjectMap, useLoader, useThree } from '@react-three/fiber';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';

const useGLTFLoader = (url: string): GLTF & ObjectMap => {
  const gl = useThree(state => state.gl);

  const gltf = useLoader(GLTFLoader, url, (loader: GLTFLoader) => {
    //set KTX transcoder for loading
    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('/gltf/basis/');
    ktx2Loader.detectSupport(gl);
    loader.setKTX2Loader(ktx2Loader);

    //set Draco decoder for loading
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/gltf/draco/');
    loader.setDRACOLoader(dracoLoader);
  });

  // Traverse the scene and set shadows for each mesh
  gltf.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return gltf;
};

export { useGLTFLoader };
