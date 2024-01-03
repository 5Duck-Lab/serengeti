import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer } from 'three';
import { GLTF } from 'three/addons/loaders/GLTFLoader.js';

const useCharacterAnimation = (gltf: GLTF) => {
  const mixerRef = useRef<AnimationMixer | null>(null);
  const lastWheelEventTime = useRef<number>(0);

  useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixerRef.current = new AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);
      action.play();
    }

    const handleWheelEvent = () => {
      lastWheelEventTime.current = Date.now();
    };

    window.addEventListener('wheel', handleWheelEvent);

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
      window.removeEventListener('wheel', handleWheelEvent);
    };
  }, [gltf]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastWheelEventTime.current;
      if (timeDiff <= 300) {
        mixerRef.current?.update(delta);
      }
    }
  });

  return mixerRef;
};

export { useCharacterAnimation };
