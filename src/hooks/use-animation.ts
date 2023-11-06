import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';
import { GLTF } from 'three/addons/loaders/GLTFLoader.js';

const useCharacterAnimation = (gltf: GLTF) => {
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixerRef.current = new AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);
      action.play();
    }

    // clean-up animation
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [gltf]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return mixerRef;
};

export { useCharacterAnimation };
