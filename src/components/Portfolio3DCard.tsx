import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

interface Card3DProps {
  position: [number, number, number];
  title: string;
  category: string;
  index: number;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
}

export const Card3D = ({ position, title, category, index, isHovered, onHover }: Card3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
      
      // Rotation on hover
      if (isHovered) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          Math.PI * 0.1,
          0.1
        );
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          0,
          0.1
        );
      }
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2.5, 0.2]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => {
          setHovered(true);
          onHover(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(false);
        }}
      >
        <meshStandardMaterial
          color={hovered ? "#e86c47" : "#f5f5f0"}
          metalness={0.3}
          roughness={0.4}
        />
      </RoundedBox>
      
      <Text
        position={[0, 0.3, 0.11]}
        fontSize={0.2}
        color="#3d2d26"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {title}
      </Text>
      
      <Text
        position={[0, -0.1, 0.11]}
        fontSize={0.12}
        color="#e86c47"
        anchorX="center"
        anchorY="middle"
      >
        {category}
      </Text>
    </group>
  );
};
