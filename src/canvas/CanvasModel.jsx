import React, { createContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { IoIosColorFilter } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";

export const colorContext = createContext();

const CanvasModel = () => {
  const [color, setColor] = useState("white");
  const [decal, setDecal] = useState("");

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setDecal(file.name);
      localStorage.setItem("decal", file.name);
    }
  };

  useEffect(() => {
    return () => {
      if (decal) URL.revokeObjectURL(decal);
    };
  }, [decal]);

  const handleColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };

  return (
    <colorContext.Provider value={[color, setColor, decal, setDecal]}>
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[1, 1, 5]} intensity={1.5} />
        <directionalLight castShadow position={[1, 1, -5]} intensity={1.5} />
        <pointLight position={[1, 2, 1]} intensity={1} />

        <Environment preset="city" />
        <mesh>
          <Model scale={10} />
        </mesh>

        <OrbitControls enableZoom enablePan enableRotate enableDamping dampingFactor={0.1} />
      </Canvas>

      {/* Control Panel */}
      <div className="absolute top-80 w-[400px] h-[150px] rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20">
        {/* File Upload Section */}
        <div className="w-full h-1/2 group flex">
          <div className="w-[80px] h-full rounded-t-2xl border flex justify-center items-center cursor-pointer">
            <IoIosColorFilter className="text-5xl" />
          </div>
          <div className="w-1/2 h-full border hidden group-hover:flex justify-center items-center">
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>
        </div>

        {/* Color Picker Section */}
        <div className="w-full h-1/2 group flex items-center">
          <div className="w-[80px] h-full rounded-b-2xl border flex justify-center items-center cursor-pointer">
            <FaFileSignature className="text-5xl" />
          </div>
          <div className="w-1/2 h-full border hidden group-hover:flex items-center gap-2 px-2">
            <button
              className="w-10 h-10 rounded-full bg-black border cursor-pointer"
              onClick={() => handleColor("black")}
            />
            <button
              className="w-10 h-10 rounded-full bg-[#f5f5dc] border cursor-pointer"
              onClick={() => handleColor("#f5f5dc")}
            />
          </div>
        </div>
      </div>
    </colorContext.Provider>
  );
};

export default CanvasModel;
