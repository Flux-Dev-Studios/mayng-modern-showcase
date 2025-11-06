import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={0.5}
      floatIntensity={0.6}
    >
      <group ref={groupRef} scale={1.3}>
        {/* Central diamond core */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.6, 0.3]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.05}
            emissive="#D4AF37"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Outer ring forming D curve */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.8, 0.12, 16, 32, Math.PI * 1.2]} />
          <meshStandardMaterial
            color="#B87333"
            metalness={0.95}
            roughness={0.1}
            emissive="#B87333"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* M peaks - left */}
        <mesh position={[-0.4, 0.5, 0]} rotation={[0, 0, Math.PI / 8]}>
          <coneGeometry args={[0.15, 0.6, 4]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.05}
            emissive="#FFD700"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* M peaks - right */}
        <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <coneGeometry args={[0.15, 0.6, 4]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.05}
            emissive="#FFD700"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Connecting spheres */}
        <mesh position={[-0.6, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.05}
            emissive="#D4AF37"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        <mesh position={[0.6, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.05}
            emissive="#D4AF37"
            emissiveIntensity={0.5}
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
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
        <spotLight position={[-10, -10, 10]} angle={0.3} penumbra={1} intensity={1} color="#FFD700" />
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#D4AF37" />
        <pointLight position={[0, -5, -5]} intensity={0.8} color="#B87333" />
        <RotatingLogo />
      </Canvas>
    </div>
  );
};

export default Logo3D;
