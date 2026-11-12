import { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const SIZE = 70
const SPACING = 0.12

function Terrain() {
  const pointsRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const positions = useMemo(() => {
    const arr = new Float32Array(SIZE * SIZE * 3)
    let i = 0
    for (let x = 0; x < SIZE; x++) {
      for (let z = 0; z < SIZE; z++) {
        arr[i++] = (x - SIZE / 2) * SPACING
        arr[i++] = 0
        arr[i++] = (z - SIZE / 2) * SPACING
      }
    }
    return arr
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pos = pointsRef.current.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const dist = Math.sqrt(x * x + z * z)
      const wave = Math.sin(dist * 1.6 - t * 1.5) * 0.18
      const hills = Math.sin(x * 0.7 + t * 0.3) * Math.cos(z * 0.7) * 0.35
      pos.setY(i, wave + hills)
    }
    pos.needsUpdate = true
    pointsRef.current.rotation.y = t * 0.05 + mouse.current.x * 0.4
    pointsRef.current.rotation.x = -0.35 + mouse.current.y * 0.15
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#111111" sizeAttenuation />
    </points>
  )
}

function PointCloud() {
  return (
    <div className="pointcloud">
      <Canvas camera={{ position: [0, 2.2, 6], fov: 55 }}>
        <Terrain />
      </Canvas>
    </div>
  )
}

export default PointCloud