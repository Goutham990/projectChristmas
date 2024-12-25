import { Fire } from './Fire';
import { Garland } from './Garland';

interface FireplaceProps {
  position?: [number, number, number];
}

export function Fireplace({ position = [0, 0, 0] }: FireplaceProps) {
  return (
    <group position={position}>
      {/* Main structure */}
      <mesh position={[0, 1.5, -2.9]} castShadow>
        <boxGeometry args={[3, 3, 0.3]} />
        <meshStandardMaterial
          color="#8b4513"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Inner frame */}
      <mesh position={[0, 1.5, -2.75]} castShadow>
        <boxGeometry args={[2.5, 2.5, 0.1]} />
        <meshStandardMaterial color="#4a2511" />
      </mesh>

      <Fire />
      <Garland />
    </group>
  );
}