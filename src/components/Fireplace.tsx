import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Fireplace({ position = [0, 0, 0] }) {
  const fireRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (fireRef.current) {
      // Animate fire light intensity
      fireRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Fireplace structure */}
      <mesh position={[0, 1.5, -2.9]} castShadow>
        <boxGeometry args={[3, 3, 0.2]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Fire */}
      <mesh
        ref={fireRef}
        position={[0, 0.5, -2.7]}
        castShadow
      >
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial
          color="#ff4500"
          emissive="#ff4500"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Garland */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -1.25 + (i * 2.5) / 9,
            2.8,
            -2.8
          ]}
          castShadow
        >
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#228B22"
            emissive="#004000"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}