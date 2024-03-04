import { ObjectMap, useLoader, useThree } from '@react-three/fiber';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { Mesh, Object3D } from 'three';
import loadingStore from '@/store/loading.store.ts';

const useGLTFLoader = (url: string): GLTF & ObjectMap => {
  const gl = useThree(state => state.gl);

  const gltf = useLoader(
    GLTFLoader,
    url,
    (loader: GLTFLoader) => {
      //set KTX transcoder for loading
      const ktx2Loader = new KTX2Loader();
      ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.134.0/examples/js/libs/basis/');
      ktx2Loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2Loader);

      //set Draco decoder for loading
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
      loader.setDRACOLoader(dracoLoader);
    },
    (progress: ProgressEvent) => {
      const { loaded, total } = progress;
      const percent = Math.floor((loaded / total) * 100);
      // eslint-disable-next-line no-warning-comments
      loadingStore.setLoading(percent); // [TODO] 여러개 로딩에 대한 로직 고려되어있지 않음
    }
  );

  // Traverse the scene and set shadows for each mesh
  gltf.scene.traverse((child: Object3D) => {
    if ((child as Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return gltf;
};

export { useGLTFLoader };
