import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Room } from './Room';
import { ChristmasTree } from './ChristmasTree';
import { Fireplace } from './Fireplace';
import { Presents } from './Presents';

export function ChristmasScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 8, 8]} />
        <OrbitControls enableDamping dampingFactor={0.05} />
        
        {/* Ambient light for general scene illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Warm fireplace light */}
        <pointLight
          position={[0, 2, 0]}
          intensity={1}
          color="#ff6b3d"
          castShadow
        />

        {/* Scene components */}
        <Room />
        <ChristmasTree position={[2, 0, 2]} />
        <Fireplace position={[0, 0, 0]} />
        <Presents />
      </Canvas>
    </div>
  );
}