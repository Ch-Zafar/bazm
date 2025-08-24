import React, { createContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export const colorContext = createContext();

const CanvasModel = () => {
  const [color, setColor] = useState("white");
  const [decal, setDecal] = useState("");

  const handleFile = (e) => {
    
    const file = e.target.files[0]; // ✅ fixed
    if (file) {
      const url = URL.createObjectURL(file);
      setDecal(url);
      localStorage.setItem("decal",url)
    }
  };

  useEffect(() => {
    return () => {
      if (decal) URL.revokeObjectURL(decal); // ✅ cleanup on unmount/replace
    };
  }, [decal]);

  const handleColor = (color) => {
    setColor(color);
    localStorage.setItem("color", color);
  };

  return (
    <colorContext.Provider value={[color, setColor ,decal,setDecal]}>
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[1, 1, 5]} intensity={1.5} />
        <directionalLight castShadow position={[1, 1, -5]} intensity={1.5} />
        <pointLight position={[1, 2, 1]} intensity={1} />

        <mesh>
          <Model scale={10} />
        </mesh>

        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>

      <div className="w-30 h-auto flex justify-between items-center mt-4">
        <button
          className="w-10 h-10 rounded-full bg-black border cursor-pointer"
          onClick={() => handleColor("black")}
        />
        <button
          className="w-10 h-10 rounded-full bg-[#f5f5dc] border cursor-pointer"
          onClick={() => handleColor("#f5f5dc")}
        />
        <input type="file" accept="image/*" onChange={handleFile} />
      </div>
    </colorContext.Provider>
  );
};

export default CanvasModel;
