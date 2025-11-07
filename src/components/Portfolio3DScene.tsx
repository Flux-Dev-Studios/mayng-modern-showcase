import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Card3D } from "./Portfolio3DCard";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
}

interface Portfolio3DSceneProps {
  projects: Project[];
  onProjectHover?: (projectId: number | null) => void;
}

export const Portfolio3DScene = ({ projects, onProjectHover }: Portfolio3DSceneProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number, isHovered: boolean) => {
    setHoveredIndex(isHovered ? index : null);
    onProjectHover?.(isHovered ? projects[index].id : null);
  };

  // Arrange cards in a grid
  const getCardPosition = (index: number): [number, number, number] => {
    const cols = 3;
    const spacing = 2.5;
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    return [
      (col - 1) * spacing,
      -(row * spacing),
      0
    ];
  };

  return (
    <Canvas style={{ height: "600px" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <Environment preset="sunset" />

      {projects.map((project, index) => (
        <Card3D
          key={project.id}
          position={getCardPosition(index)}
          title={project.title}
          category={project.category}
          index={index}
          isHovered={hoveredIndex === index}
          onHover={(isHovered) => handleHover(index, isHovered)}
        />
      ))}
    </Canvas>
  );
};
