import { useRef } from 'react';
import { Mesh } from 'three';

export function Presents() {
  const presentsRef = useRef<Mesh>(null);

  return (
    <group position={[2, 0.3, 2]}>
      {Array.from({ length: 5 }).map((_, i) => {
        const size = 0.3 + Math.random() * 0.3;
        return (
          <mesh
            key={i}
            position={[
              Math.random() * 1 - 0.5,
              size / 2,
              Math.random() * 1 - 0.5
            ]}
            rotation={[0, Math.random() * Math.PI, 0]}
            castShadow
          >
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial
              color={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][i]}
            />
          </mesh>
        );
      })}
    </group>
  );
}