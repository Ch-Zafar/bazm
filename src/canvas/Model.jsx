
import React, { useEffect, useMemo, useRef } from "react";
import { MeshStandardMaterial } from "three";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

const Model = (props) => {
  const shirtColor = localStorage.getItem("color") || "white";
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const meshRef = useRef();

  // Load decal texture (logo or image)
  const logo = localStorage.getItem("decal")
  const decalTexture = useTexture(logo?`${logo}`:"bg.jpg");
  useEffect(() => {
    if (materials.lambert1) {
      materials.lambert1.color.set(shirtColor);
      materials.lambert1.needsUpdate = true;
    }
  }, [shirtColor, materials]);
  const shirtMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: shirtColor,
        metalness: 0.5,
        roughness: 0.5,
      }),
    [shirtColor]
  );

  return (
    <group {...props} dispose={null}>
      {/* Render shirt mesh */}
      <mesh
        ref={meshRef}
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        castShadow
        receiveShadow
      />

      {/* Back side logo decal - separate from mesh but referencing it */}
      <Decal
        mesh={meshRef}              // Target mesh reference
        position={[0, 0.1, -0.15]}  // 3D position
        rotation={[0, Math.PI, 0]}  // 3D rotation
        scale={0.2}                 // Size (number or [x,y,z])
        map={decalTexture}          // Texture to apply
        transparent={true}          // Enable transparency
        polygonOffset={true}        // Z-fighting prevention
        polygonOffsetFactor={-1}    // Offset amount
      />
    </group>
  );
};


export default Model;