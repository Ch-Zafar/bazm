import React, { createContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { IoIosColorFilter } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { SlSizeFullscreen } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const colorContext = createContext();

const CanvasModel = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.items)

  const [color, setColor] = useState("white");
  const [decal, setDecal] = useState("");
  const [size, setSize] = useState("");
  const lastId = cartItems.length>0 ?cartItems[cartItems.lenght-1]:1;
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setDecal(file.name);
      // Note: localStorage usage removed for better compatibility
    }
  };

  const handleDecal = (decal) => {
    setDecal(decal);
    localStorage.setItem('decal', decal)
  };
  const handleSize = (size) => {
    setSize(size);
    localStorage.setItem('size', size)
  }

  const handleAddtocart = () => {
    const currentDecal =localStorage.getItem('decal');
    const currentSize = localStorage.getItem('size')
    const cartItems = {id:lastId, decal: currentDecal, color: color, size: currentSize, quantity: 1, price: 1700, imagePath: './WhatsApp Image 2025-08-13 at 07.06.14_d82faffa.jpg' }
    console.log(cartItems);
    try {
      dispatch(addToCart(cartItems));
      toast('Added to cart Sucessfully',{position:'top-center'})
    } catch (error) {
      toast('An unexpected error occured');

    }
  };

  const decalImg = [
    { id: 1, name: "bg.jpg" },
    { id: 3, name: "bg-2.jpg" },
    { id: 4, name: "bg-3.jpg" },
    { id: 5, name: "bg-4.jpg" },
    { id: 6, name: "bg-5.jpg" }
  ];

  useEffect(() => {
    return () => {
      if (decal) URL.revokeObjectURL(decal);
    };
  }, [decal]);

  const handleColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem('color', newColor);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // console.log("Mobile:", isMobile);
  return (

    <colorContext.Provider value={[color, setColor, decal, setDecal]}>
      <ToastContainer />

      <div className="relative w-full h-screen overflow-hidden">
        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[1, 1, 5]} intensity={1.5} />
            <directionalLight castShadow position={[1, 1, -5]} intensity={1.5} />
            <pointLight position={[1, 2, 1]} intensity={1} />

            <Environment preset="city" />
            <mesh>
              <Model scale={isMobile ? 4 : 10} />
            </mesh>

            <OrbitControls enableZoom={false} enablePan enableRotate enableDamping dampingFactor={0.1} />
          </Canvas>
        </div>

        {/* Control Panel - Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2">
          <div className="w-20 space-y-2">
            {/* Decal Selection */}
            <div className="group relative">
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl cursor-pointer bg-white/30 backdrop-blur-lg hover:bg-white/40 transition-all duration-300">
                <IoIosColorFilter className="text-black text-3xl" />
              </div>
              <div className="absolute left-24 top-0 w-80 bg-white/30 backdrop-blur-md rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <h3 className="text-black font-medium mb-4">Select Design</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {decalImg.map((e) => (
                    <div key={e.id} className="w-20 h-20 cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform">
                      <img
                        src={`/${e.name}`}
                        alt={`Design ${e.id}`}
                        className="w-full h-full object-cover"
                        onClick={() => handleDecal(e.name)}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Upload Custom Design</label>
                  <input
                    type="file"
                    onChange={handleFile}
                    accept="image/*"
                    className="w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-black file:text-white hover:file:bg-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Color Picker */}
            <div className="group relative">
              <div className="w-20 h-20 flex justify-center items-center cursor-pointer bg-white/30 backdrop-blur-lg rounded-2xl hover:bg-white/40 transition-all duration-300">
                <FaFileSignature className="text-3xl text-black" />
              </div>
              <div className="absolute left-24 top-0 w-60 bg-white/30 backdrop-blur-lg rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <h3 className="text-black font-medium mb-4">Select Color</h3>
                <div className="flex gap-3">
                  <button
                    className="w-12 h-12 rounded-full bg-black border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform shadow-lg"
                    onClick={() => handleColor("black")}
                  />
                  <button
                    className="w-12 h-12 rounded-full bg-[#f5f5dc] border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform shadow-lg"
                    onClick={() => handleColor("#f5f5dc")}
                  />
                </div>
              </div>
            </div>

            {/*Size Picker*/}
            <div className="group relative">
              <div className="w-20 h-20 flex justify-center items-center cursor-pointer bg-white/30 backdrop-blur-lg rounded-2xl hover:bg-white/40 transition-all duration-300">
                <SlSizeFullscreen />

              </div>
              <div className="absolute left-24 top-0 w-60 bg-white/30 backdrop-blur-lg rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <h3 className="text-black font-medium mb-4">Select Size</h3>
                <div className="flex gap-3">
                  <button onClick={() => handleSize('S')} className="w-20 h-10 bg-black border-1 border-white rounded-xl text-white/70 cursor-pointer active:scale-90 ">
                    S
                  </button>
                  <button onClick={() => handleSize('M')} className="w-20 h-10 bg-black border-1 border-white rounded-xl text-white/70 cursor-pointer active:scale-90 ">
                    M
                  </button>
                  <button onClick={() => handleSize('L')} className="w-20 h-10 bg-black border-1 border-white rounded-xl text-white/70 cursor-pointer active:scale-90 ">
                    L
                  </button>
                  <button onClick={() => handleSize('XL')} className="w-20 h-10 bg-black border-1 border-white rounded-xl text-white/70 cursor-pointer active:scale-90 ">
                    Xl
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md">
          <div className="p-4 space-y-4">
            {/* Mobile Decal Selection */}
            <div>
              <h3 className="text-black font-medium mb-3 flex items-center">
                <IoIosColorFilter className="text-xl mr-2" />
                Select Design
              </h3>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {decalImg.map((e) => (
                  <div key={e.id} className="aspect-square cursor-pointer rounded-lg overflow-hidden">
                    <img
                      src={`/${e.name}`}
                      alt={`Design ${e.id}`}
                      className="w-full h-full object-cover"
                      onClick={() => handleDecal(e.name)}
                    />
                  </div>
                ))}
              </div>
              <input
                type="file"
                onChange={handleFile}
                accept="image/*"
                className="w-full text-xs text-black file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-black file:text-white"
              />
            </div>

            {/* Mobile Color Picker */}
            <div>
              <h3 className="text-black font-medium mb-3 flex items-center">
                <FaFileSignature className="text-xl mr-2" />
                Select Color
              </h3>
              <div className="flex gap-3">
                <button
                  className="w-10 h-10 rounded-full bg-black border-2 border-gray-300 cursor-pointer active:scale-95 transition-transform"
                  onClick={() => handleColor("black")}
                />
                <button
                  className="w-10 h-10 rounded-full bg-[#f5f5dc] border-2 border-gray-300 cursor-pointer active:scale-95 transition-transform"
                  onClick={() => handleColor("#f5f5dc")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 space-y-3">
          <button
            onClick={()=>handleAddtocart()}
            className="block w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg shadow-lg font-medium hover:bg-gray-100 active:scale-95 transition-all duration-200 min-w-[120px]"
          >
            Add to Cart
          </button>

          <button className="block w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg shadow-lg font-medium hover:bg-gray-100 active:scale-95 transition-all duration-200 min-w-[120px]">
            Buy Now
          </button>
        </div>

        {/* Mobile Action Buttons - Alternative positioning */}
        <div className="lg:hidden absolute top-4 right-4 flex space-x-2">
          <button
            onClick={()=>handleAddtocart()}
            className="px-4 py-2 cursor-pointer bg-white text-black rounded-lg shadow-lg font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            Add to Cart
          </button>

          <button className="px-4 py-2 cursor-pointer bg-white text-black rounded-lg shadow-lg font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all duration-200">
            Buy Now
          </button>
        </div>

        {/* Current Selection Display */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md rounded-lg p-3 text-sm">
          <div className="text-black font-medium">Current Selection:</div>
          <div className="text-gray-700">Color: <span className="font-medium">{color}</span></div>
          <div className="text-gray-700">Design: <span className="font-medium">{decal || 'None'}</span></div>
          <div className="text-gray-700">Size: <span className="font-medium">{size || 'None'}</span></div>

        </div>
      </div>
    </colorContext.Provider>
  );
};

export default CanvasModel;