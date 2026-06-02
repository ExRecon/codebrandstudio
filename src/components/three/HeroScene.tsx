import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'

function GeometryCluster() {
  const group = useRef<Mesh>(null)

  useFrame((state) => {
    if (!group.current) {
      return
    }

    group.current.rotation.x = state.clock.elapsedTime * 0.08
    group.current.rotation.y = state.clock.elapsedTime * 0.14
    group.current.position.x = state.pointer.x * 0.55
    group.current.position.y = state.pointer.y * 0.38
  })

  return (
    <group>
      <Float speed={1.3} rotationIntensity={1.4} floatIntensity={1.1}>
        <mesh ref={group} position={[1.5, 0.2, -0.5]}>
          <icosahedronGeometry args={[1.25, 8]} />
          <MeshDistortMaterial
            color="#7bd8ff"
            roughness={0.05}
            metalness={0.6}
            speed={2.2}
            distort={0.35}
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={1.1} floatIntensity={0.9}>
        <mesh position={[-2.2, 1.1, -1.2]}>
          <torusKnotGeometry args={[0.45, 0.16, 140, 18]} />
          <meshStandardMaterial color="#8f83ff" metalness={0.8} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[2.1, -1.2, -1]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#f2f7ff" metalness={1} roughness={0.05} />
        </mesh>
      </Float>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 6, 15]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} color="#8be9ff" />
        <pointLight position={[-3, -2, 2]} intensity={1.35} color="#8f83ff" />
        <Suspense fallback={null}>
          <GeometryCluster />
          <Sparkles count={140} scale={[8, 5, 4]} size={2} speed={0.35} color="#8be9ff" />
        </Suspense>
      </Canvas>
    </div>
  )
}
