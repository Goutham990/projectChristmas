import { useRef } from 'react';
import { Mesh } from 'three';

export function Room() {
  const floorRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#d4b483" />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -3]}>
        <boxGeometry args={[6, 6, 0.1]} />
        <meshStandardMaterial color="#a7c5eb" />
      </mesh>

      {/* Side wall */}
      <mesh position={[-3, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[6, 6, 0.1]} />
        <meshStandardMaterial color="#a7c5eb" />
      </mesh>
    </group>
  );
}