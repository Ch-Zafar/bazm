import React, { useContext, useEffect } from 'react'
import { MeshStandardMaterial, PositionalAudio } from 'three';
 import {Decal, useGLTF, useTexture } from "@react-three/drei";



const Model = (props) => {
    const {nodes,materials}=useGLTF("/shirt_baked.glb");
    console.log(nodes)

    const shirtTexture=useTexture("/WhatsApp Image 2025-08-20 at 21.07.20_15601044.jpg");



    return(
      <>
        <mesh
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          castShadow
          receiveShadow
        
        
        />
        <meshStandardMaterial color="white" />

        <Decal
          position={[0,0.1,0.15]}
          rotation={[0,0,0]}
          scale={0.2}
          map={shirtTexture}
          depthTest={true}
          depthWrite={false}
        
        
        />
      
      
      
      </>
    )






























  //   const shirtColor=localStorage.getItem("color")
  //   const { scene } = useGLTF("/shirt_baked.glb");
  //     const decalTexture = useTexture("/WhatsApp Image 2025-08-20 at 21.07.20_15601044.jpg")
    
    
  //   useEffect(()=>{
  //     scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material = new MeshStandardMaterial({ color: shirtColor,etalness: 0.5,
  // roughness: 0.5 });
  //   }
  // });
  //   },[shirtColor])

  // return (
  //   <>
  //     <primitive object={scene} {...props} />
      
    
    
  //   </>

  // )
}

export default Model