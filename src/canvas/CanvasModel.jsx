import React, { createContext, useState } from "react"
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Decal } from '@react-three/drei';
import { useTexture } from "@react-three/drei";


export const colorContext = createContext();
const CanvasModel = () => {


  const [color, setColor] = useState('white');
  const handleColor = (color) => {
    setColor(color)
    localStorage.setItem("color", color)
  }
  return (
    <>

      <colorContext.Provider value={[color, setColor]}>
        <Canvas>
          <ambientLight intensity={0.5} />
          {/* /////////////////for front ///////////////// */}
          <directionalLight position={[5, 5, 5]} intensity={5} target-position={[0, 0, 0]} />
          {/* ////////////////for back ///////////////////// */}
          {/* <directionalLight position={[5,5,-10]} intensity={5} target-position={[0,0,0]}/> */}
          <pointLight position={[0, 0, 5]} />
          <mesh>
            <Model scale={10} />
            
          </mesh>
          <OrbitControls
            enableZoom={true}   // allow zoom
            enablePan={true}    // allow panning
            enableRotate={true}
          />

        </Canvas>
        {/* <input type="color" name="color" id="" onChange={handleColor} /> */}
        <div
          className="w-30 h-auto flex justify-between items-center"
        >
          <button
            className="w-10 h-10 rounded-full bg-black border-0 border-black cursor-pointer hover:border-1 active:border-1" onClick={() => handleColor('black')}
          >

          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#f5f5dc] border-0 border-black cursor-pointer hover:border-1 active:border-1" onClick={() => handleColor("#f5f5dc")}
          >

          </button>
        </div>







      </colorContext.Provider>


    </>
  )
}

export default CanvasModel