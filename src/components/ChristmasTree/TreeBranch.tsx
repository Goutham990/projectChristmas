import { useMemo } from 'react';
import { Vector3 } from 'three';

export function TreeBranch({ level, totalLevels, baseRadius = 1.5 }) {
  const branchPoints = useMemo(() => {
    const points: Vector3[] = [];
    const segments = 8;
    const heightRatio = (totalLevels - level) / totalLevels;
    const radius = baseRadius * heightRatio;
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = level * 0.5;
      points.push(new Vector3(x, y, z));
    }
    
    return points;
  }, [level, totalLevels, baseRadius]);

  return (
    <mesh position={[0, level * 0.3, 0]} castShadow>
      <cylinderGeometry args={[radius * 0.8, radius, 0.4, 8]} />
      <meshStandardMaterial
        color="#0a481e"
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}