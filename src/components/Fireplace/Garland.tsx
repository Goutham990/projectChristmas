import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Garland() {
  const lightsRef = useRef<Mesh[]>([]);

  useFrame((state) => {
    lightsRef.current.forEach((light, i) => {
      if (light) {
        const twinkle = Math.sin(state.clock.elapsedTime * 2 + i) * 0.3 + 0.7;
        light.material.emissiveIntensity = twinkle;
      }
    });
  });

  return (
    <group position={[0, 2.8, -2.8]}>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (lightsRef.current[i] = el!)}
          position={[-1.25 + (i * 2.5) / 9, 0, 0]}
          castShadow
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#228B22"
            emissive="#004000"
            emissiveIntensity={0.5}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}