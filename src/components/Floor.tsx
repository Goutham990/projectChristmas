import { useRef } from 'react';
import { Mesh } from 'three';

export function Floor() {
  const floorRef = useRef<Mesh>(null);

  return (
    <mesh
      ref={floorRef}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[6, 6, 32, 32]} />
      <meshStandardMaterial
        color="#d4b483"
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}