import { useRef } from 'react';
import { Points, BufferGeometry } from 'three';
import { useFrame } from '@react-three/fiber';

export function SnowParticles() {
  const pointsRef = useRef<Points>(null);
  const geometryRef = useRef<BufferGeometry>(null);

  useFrame((state) => {
    if (geometryRef.current && geometryRef.current.attributes.position) {
      const positions = geometryRef.current.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        // Move snow downward
        positions[i + 1] -= 0.01;
        // Reset position when snow reaches bottom
        if (positions[i + 1] < -3) {
          positions[i + 1] = 3;
          // Add some randomness to x and z when resetting
          positions[i] = (Math.random() - 0.5) * 6;
          positions[i + 2] = (Math.random() - 0.5) * 6;
        }
      }
      geometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <float32BufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 6)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}