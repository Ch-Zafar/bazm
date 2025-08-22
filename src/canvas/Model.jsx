import React from 'react'
import { MeshStandardMaterial } from "three";
 import { useGLTF } from "@react-three/drei";



const Model = (props) => {
    const { scene } = useGLTF("/shirt_baked.glb");
    scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({ color: "red" });
    }
  });

  return (
    <primitive object={scene} {...props} />

  )
}

export default Model