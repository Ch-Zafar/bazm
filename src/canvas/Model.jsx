import React, { useContext, useEffect } from 'react'
import { MeshStandardMaterial } from "three";
 import { useGLTF, useTexture } from "@react-three/drei";



const Model = (props) => {
    const shirtColor=localStorage.getItem("color")
    const { scene } = useGLTF("/shirt_baked.glb");
      const decalTexture = useTexture("/WhatsApp Image 2025-08-20 at 21.07.20_15601044.jpg")
    
    
    useEffect(()=>{
      scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({ color: shirtColor,etalness: 0.5,
  roughness: 0.5 });
    }
  });
    },[shirtColor])

  return (
    <>
      <primitive object={scene} {...props} />
      
    
    
    </>

  )
}

export default Model