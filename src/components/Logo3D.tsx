import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.3}
    >
      <group ref={groupRef}>
        {/* D shape */}
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.15, 1, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, 0.35, 0]}>
          <boxGeometry args={[0.4, 0.15, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, -0.35, 0]}>
          <boxGeometry args={[0.4, 0.15, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.1, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* M shape */}
        <mesh position={[0.3, 0, 0]}>
          <boxGeometry args={[0.15, 1, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.15, 1, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.45, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.15, 0.5, 0.2]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Logo3D = () => {
  return (
    <div className="w-16 h-16">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <RotatingLogo />
      </Canvas>
    </div>
  );
};

export default Logo3D;
