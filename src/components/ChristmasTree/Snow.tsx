import { useRef } from 'react';
import { Points, BufferGeometry } from 'three';
import { useFrame } from '@react-three/fiber';

export function Snow() {
  const pointsRef = useRef<Points>(null);
  const geometryRef = useRef<BufferGeometry>(null);

  useFrame((state) => {
    if (pointsRef.current && geometryRef.current) {
      const positions = geometryRef.current.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.01;
        if (positions[i + 1] < -2) {
          positions[i + 1] = 4;
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
          array={new Float32Array(3000).map(() => Math.random() * 6 - 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.6}
      />
    </points>
  );
}