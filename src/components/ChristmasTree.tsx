import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

export function ChristmasTree({ position = [0, 0, 0] }) {
  const treeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (treeRef.current) {
      // Add subtle animation to the tree
      treeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Tree trunk */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>

      {/* Tree body */}
      <mesh ref={treeRef} position={[0, 2.5, 0]} castShadow>
        <coneGeometry args={[1.5, 3, 8]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>

      {/* Ornaments */}
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = (i / 20) * Math.PI * 2;
        const y = Math.random() * 2 + 1.5;
        const radius = 1.2 - (y - 1.5) / 3;
        
        return (
          <mesh
            key={i}
            position={[
              Math.cos(theta) * radius,
              y,
              Math.sin(theta) * radius
            ]}
            castShadow
          >
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial
              color={['#ff0000', '#ffff00', '#0000ff'][i % 3]}
              emissive={['#400000', '#404000', '#000040'][i % 3]}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}