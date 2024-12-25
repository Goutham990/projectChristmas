import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';
import { ChristmasTree } from './ChristmasTree';
import { Fireplace } from './Fireplace';
import { Present } from './Present';
import { Floor } from './Floor';
import { SnowParticles } from './Snow/SnowParticles';

export function Scene() {
  return (
    <Canvas 
      shadows 
      style={{ background: '#000000' }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#000000']} />
      <PerspectiveCamera makeDefault position={[6, 4, 6]} />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      
      <Environment preset="night" />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight
        position={[0, 2, -2]}
        intensity={2}
        color="#ff6b3d"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Scene Components */}
      <Floor />
      <ChristmasTree position={[2, 0, 2]} />
      <Fireplace position={[0, 0, 0]} />

      {/* Presents */}
      <Present
        position={[1.8, 0.2, 1.8]}
        size={0.4}
        color="#ff0000"
        ribbonColor="#ffd700"
      />
      <Present
        position={[2.2, 0.15, 2.2]}
        size={0.3}
        color="#00ff00"
        ribbonColor="#ffffff"
      />
      <Present
        position={[2.4, 0.25, 1.9]}
        size={0.5}
        color="#0000ff"
        ribbonColor="#ff69b4"
      />

      {/* Snow Effect */}
      <SnowParticles />
    </Canvas>
  );
}