import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface OrnamentProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

export function Ornament({ position, color, size = 0.12 }: OrnamentProps) {
  const ornamentRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (ornamentRef.current) {
      // Subtle sparkle effect
      ornamentRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      const sparkle = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 0.7;
      ornamentRef.current.material.emissiveIntensity = sparkle;
    }
  });

  return (
    <mesh ref={ornamentRef} position={position} castShadow>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}