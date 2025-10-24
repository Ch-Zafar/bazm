import React, { createContext, useEffect, useState } from 'react'
import Loginpage from '../../components/Login'
import SignUp from '../../components/SignUp'
import { useSelector } from 'react-redux';



export const authcontext = createContext();

const Login_SignUp = () => {
  const isVisible = useSelector((state)=>state.auth.isVisible);
  useEffect(()=>{console.log(isVisible)},[])
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <div className={`w-full backdrop-blur-2xl bg-white/30 fixed top-1  h-screen p-20 flex rounded-2xl ${isVisible ? 'translate-x-0 ':'translate-x-500'} transition-all duration-300 `}>
        {/* //form page */}
        <div className='w-full h-full flex shadow-2xl rounded-2xl'>
          <div className='w-1/2 h-full bg-[#f9ebe1] rounded-l-2xl'>
            <img src="./WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56 (1).png" alt="" className='w-20 h-20' />
            <authcontext.Provider value={setLogin} className=' w-full h-full mt-10'>
              {isLogin ?
                <Loginpage />
                :
                <SignUp />}
            </authcontext.Provider>
          </div>
          {/* hero Image Side  */}
          <div className='w-1/2 h-full  rounded-r-2xl'>
            <img src="./WhatsApp Image 2025-08-02 at 23.29.11_af1d3f56.jpg" className='w-full h-full rounded-r-2xl' alt="" />
          </div>
        </div>
      </div>



    </>
  )
}

export default Login_SignUp