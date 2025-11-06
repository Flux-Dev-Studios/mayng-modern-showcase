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
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.4}
    >
      <group ref={groupRef} scale={1.2}>
        {/* Left vertical bar (D) */}
        <mesh position={[-0.5, 0, 0]}>
          <boxGeometry args={[0.2, 1.2, 0.25]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Curved section (D meets M) */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.6, 0.1, 16, 32, Math.PI]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Right peak forming M peaks */}
        <mesh position={[0.25, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.18, 0.7, 0.25]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        <mesh position={[0.55, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.18, 0.7, 0.25]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Center connector */}
        <mesh position={[0.4, -0.2, 0]}>
          <boxGeometry args={[0.15, 0.4, 0.25]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Right vertical bar (M) */}
        <mesh position={[0.7, -0.15, 0]}>
          <boxGeometry args={[0.18, 0.9, 0.25]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Logo3D = () => {
  return (
    <div className="w-24 h-24">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.7} />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#ec4899" />
        <RotatingLogo />
      </Canvas>
    </div>
  );
};

export default Logo3D;
