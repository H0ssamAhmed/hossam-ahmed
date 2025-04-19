
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Sphere, Stars } from "@react-three/drei";
import { Vector3, Mesh } from "three";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

function Grid() {
  const { theme } = useTheme();
  const gridColor = theme === "dark" ? "#8B5CF6" : "#9B87F5";

  return (
    <gridHelper
      args={[20, 20, gridColor, gridColor]}
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function FloatingParticles({ count = 100 }) {
  const { theme } = useTheme();
  const particles = useRef<Mesh[]>([]);
  const velocities = useRef<Vector3[]>([]);

  // Initialize positions and velocities
  useEffect(() => {
    velocities.current = [];
    for (let i = 0; i < count; i++) {
      const velocity = new Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );
      velocities.current.push(velocity);
    }
  }, [count]);

  useFrame(() => {
    particles.current.forEach((particle, i) => {
      if (particle && velocities.current[i]) {
        particle.position.add(velocities.current[i]);

        // Bounce off invisible boundaries
        if (Math.abs(particle.position.x) > 5) {
          velocities.current[i].x *= -1;
        }
        if (Math.abs(particle.position.y) > 5) {
          velocities.current[i].y *= -1;
        }
        if (Math.abs(particle.position.z) > 5) {
          velocities.current[i].z *= -1;
        }
      }
    });
  });

  const particleColor = theme === "dark" ? "#8B5CF6" : "#9B87F5";

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) particles.current[i] = el;
          }}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={particleColor}
            emissive={particleColor}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </>
  );
}

function RotatingWireframeSphere() {
  const { theme } = useTheme();
  const sphereRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2 +
        clock.getElapsedTime() * 0.1;
    }
  });

  const sphereColor = theme === "dark" ? "#8B5CF6" : "#9B87F5";

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial
        color={sphereColor}
        wireframe
        emissive={sphereColor}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export function HeroScene() {
  const { theme } = useTheme();
  const ambientLightColor = theme === "dark" ? "#180F4A" : "#9BA1FF";
  const spotLightColor = theme === "dark" ? "#8B5CF6" : "#9B87F5";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[450px] md:h-[500px] rounded-full w-full"
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.3} color={ambientLightColor} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          color={spotLightColor}
          intensity={2}
        />

        <RotatingWireframeSphere />
        <Grid />
        <FloatingParticles count={50} />
        {theme === "dark" && <Stars radius={100} depth={50} count={1000} factor={4} fade />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
}
