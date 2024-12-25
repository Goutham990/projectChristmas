import { useMemo } from 'react';
import { TreeBranch } from './TreeBranch';
import { Ornament } from './Ornament';
import { Snow } from './Snow';

interface ChristmasTreeProps {
  position?: [number, number, number];
}

export function ChristmasTree({ position = [0, 0, 0] }: ChristmasTreeProps) {
  const ornamentPositions = useMemo(() => {
    const positions: Array<[number, number, number]> = [];
    const levels = 6;
    
    for (let level = 0; level < levels; level++) {
      const y = level * 0.5;
      const radius = 1.5 * (1 - level / levels);
      const ornamentsInLevel = Math.floor(6 * (1 - level / levels));
      
      for (let i = 0; i < ornamentsInLevel; i++) {
        const angle = (i / ornamentsInLevel) * Math.PI * 2;
        positions.push([
          Math.cos(angle) * radius,
          y + 0.5,
          Math.sin(angle) * radius
        ]);
      }
    }
    
    return positions;
  }, []);

  const ornamentColors = ['#ff0000', '#ffd700', '#ff69b4', '#4169e1', '#32cd32'];

  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 0.6, 8]} />
        <meshStandardMaterial color="#8b4513" roughness={0.9} />
      </mesh>

      {/* Tree Branches */}
      {Array.from({ length: 6 }).map((_, i) => (
        <TreeBranch key={i} level={i} totalLevels={6} />
      ))}

      {/* Ornaments */}
      {ornamentPositions.map((pos, i) => (
        <Ornament
          key={i}
          position={pos}
          color={ornamentColors[i % ornamentColors.length]}
        />
      ))}

      {/* Snow Effect */}
      <Snow />
    </group>
  );
}