import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { ReactNode, useRef } from 'react';
import { Group } from 'three';

type CursorFollowGrpProps = {
  children: ReactNode;
};

export const CursorFollowGrp = ({ children }: CursorFollowGrpProps) => {
  const modelGrpRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    easing.dampE(
      modelGrpRef.current.rotation,
      [-state.pointer.y / 3.5 + 0.25, state.pointer.x / 1.5, 0],
      0.25,
      delta
    );
  });

  return <group ref={modelGrpRef}>{children}</group>;
};
