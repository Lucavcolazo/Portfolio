/// <reference types="three" />

declare module '@react-three/fiber' {
  import { ReactThreeFiber } from '@react-three/fiber'
  export * from '@react-three/fiber'
  
  // Extender JSX.IntrinsicElements para incluir elementos de Three.js
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
        pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>
        spotLight: ReactThreeFiber.Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>
        directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
        mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
        group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
        color: ReactThreeFiber.ColorNode<THREE.Color>
      }
    }
  }
}

declare module '@react-three/drei' {
  export * from '@react-three/drei'
}
