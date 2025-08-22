import React from "react"
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";



const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} /> 
      <pointLight position={[0, 0, 5]} />
      <mesh>
        <Model scale={10}/>
      </mesh>
    <OrbitControls
      enableZoom={true}   // allow zoom
    enablePan={true}    // allow panning
    enableRotate={true}
    />

    </Canvas>
  )
}

export default CanvasModel