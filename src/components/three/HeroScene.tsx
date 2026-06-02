import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'

function HeroOrb() {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.04
    mesh.current.rotation.y = state.clock.elapsedTime * 0.07
    mesh.current.position.x = state.pointer.x * 0.25
    mesh.current.position.y = state.pointer.y * 0.18
  })

  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={mesh} position={[1.5, 0.2, -0.5]}>
        <icosahedronGeometry args={[1.1, 8]} />
        <MeshDistortMaterial
          color="#7bd8ff"
          roughness={0.1}
          metalness={0.5}
          speed={1.4}
          distort={0.18}
          transparent
          opacity={0.16}
        />
      </mesh>
    </Float>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 6, 15]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 4]} intensity={0.7} color="#8be9ff" />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#8f83ff" />
        <Suspense fallback={null}>
          <HeroOrb />
        </Suspense>
      </Canvas>
    </div>
  )
}
