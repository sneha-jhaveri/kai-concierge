
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingOrb from './FloatingOrb';

const Scene3D = () => {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      <FloatingOrb position={[-3, 2, -2]} color="#D4AF37" size={0.3} />
      <FloatingOrb position={[3, -1, -3]} color="#6B46C1" size={0.4} />
      <FloatingOrb position={[0, 3, -4]} color="#E8B4B8" size={0.2} />
      <FloatingOrb position={[-2, -2, -1]} color="#9333EA" size={0.35} />
    </Canvas>
  );
};

export default Scene3D;
