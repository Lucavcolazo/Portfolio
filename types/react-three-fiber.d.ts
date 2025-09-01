declare module '@react-three/fiber' {
  import { ReactElement, RefAttributes } from 'react'
  import { Object3D, Camera, Scene, WebGLRenderer, Group, Points, BufferGeometry, Material } from 'three'

  export interface ThreeElements {
    ambientLight: Object3DProps<THREE.AmbientLight>
    pointLight: Object3DProps<THREE.PointLight>
    spotLight: Object3DProps<THREE.SpotLight>
    directionalLight: Object3DProps<THREE.DirectionalLight>
    mesh: Object3DProps<THREE.Mesh>
    group: Object3DProps<THREE.Group>
    points: Object3DProps<THREE.Points>
    bufferGeometry: BufferGeometryProps<THREE.BufferGeometry>
    pointsMaterial: MaterialProps<THREE.PointsMaterial>
    color: ColorProps<THREE.Color>
  }

  interface Object3DProps<T extends Object3D> {
    position?: [number, number, number]
    rotation?: [number, number, number]
    scale?: [number, number, number]
    ref?: RefAttributes<T>
    children?: ReactElement | ReactElement[]
    [key: string]: any
  }

  interface BufferGeometryProps<T extends BufferGeometry> {
    ref?: RefAttributes<T>
    [key: string]: any
  }

  interface MaterialProps<T extends Material> {
    ref?: RefAttributes<T>
    color?: string | number
    transparent?: boolean
    size?: number
    sizeAttenuation?: boolean
    depthWrite?: boolean
    opacity?: number
    [key: string]: any
  }

  interface ColorProps<T> {
    attach?: string
    args?: any[]
    [key: string]: any
  }

  export interface CanvasProps {
    camera?: Partial<Camera>
    style?: React.CSSProperties
    children?: ReactElement | ReactElement[]
    [key: string]: any
  }

  export interface UseFrameProps {
    (state: {
      clock: { elapsedTime: number }
      pointer: { x: number; y: number }
      viewport: { width: number; height: number }
    }): void
  }

  export interface UseThreeProps {
    size: { width: number; height: number }
    viewport: { width: number; height: number }
  }

  export const Canvas: React.FC<CanvasProps>
  export const useFrame: (callback: UseFrameProps) => void
  export const useThree: () => UseThreeProps
}

declare module '@react-three/drei' {
  import { ReactElement, RefAttributes } from 'react'
  import { Object3D, Camera } from 'three'

  export interface OrbitControlsProps {
    enableZoom?: boolean
    enablePan?: boolean
    enableRotate?: boolean
    autoRotate?: boolean
    autoRotateSpeed?: number
    [key: string]: any
  }

  export interface PointsProps {
    ref?: RefAttributes<THREE.Points>
    positions: Float32Array
    stride?: number
    frustumCulled?: boolean
    children?: ReactElement | ReactElement[]
    [key: string]: any
  }

  export interface PointMaterialProps {
    transparent?: boolean
    color?: string
    size?: number
    sizeAttenuation?: boolean
    depthWrite?: boolean
    opacity?: number
    [key: string]: any
  }

  export const OrbitControls: React.FC<OrbitControlsProps>
  export const Points: React.FC<PointsProps>
  export const PointMaterial: React.FC<PointMaterialProps>
}
