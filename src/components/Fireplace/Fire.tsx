import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';

export function Fire() {
  const fireRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);

  useFrame((state) => {
    if (fireRef.current && materialRef.current) {
      // Animate fire height
      fireRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      
      // Animate fire intensity
      const intensity = 1.5 + Math.sin(state.clock.elapsedTime * 8) * 0.5;
      materialRef.current.emissiveIntensity = intensity;
    }
  });

  return (
    <group position={[0, 0.5, -2.7]}>
      {/* Main flame */}
      <mesh ref={fireRef} castShadow>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#ff4500"
          emissive="#ff4500"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Ember particles */}
      <points>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            count={50}
            array={new Float32Array(150).map(() => (Math.random() - 0.5) * 0.5)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#ff8c00"
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
}