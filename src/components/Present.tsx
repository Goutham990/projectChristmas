import { useRef } from 'react';
import { Mesh } from 'three';

interface PresentProps {
  position: [number, number, number];
  size: number;
  color: string;
  ribbonColor: string;
}

export function Present({ position, size, color, ribbonColor }: PresentProps) {
  const presentRef = useRef<Mesh>(null);

  return (
    <group position={position}>
      {/* Main box */}
      <mesh castShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.5}
        />
      </mesh>

      {/* Ribbon */}
      <mesh position={[0, 0, size * 0.01]} castShadow>
        <boxGeometry args={[size * 0.1, size, size * 0.02]} />
        <meshStandardMaterial
          color={ribbonColor}
          metalness={0.3}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, size * 0.01, 0]} castShadow rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[size * 0.1, size, size * 0.02]} />
        <meshStandardMaterial
          color={ribbonColor}
          metalness={0.3}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}