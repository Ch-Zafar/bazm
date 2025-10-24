  import React, { useContext, useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { addToCart } from '../features/cartSlice'




  const Productcard = () => {
    
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);


    







    const handleAddToCart = () => {
      dispatch(addToCart({ id: 1, name: "Oversized Tshirt" }));

    };
    const handleseeItems=()=>{

    }

    // useEffect(()=>{
    //   console.log(items)
    // },[items])

    return (
      <div className="w-[350px] h-[500px] cursor-pointer relative group overflow-hidden rounded-xl shadow-lg">
        {/* Default image */}
        <img
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          src="/WhatsApp Image 2025-08-13 at 07.06.13_92a4c78f.jpg"
          alt="Front View"
        />

        {/* Hover image */}
        <img
          className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          src="/WhatsApp Image 2025-08-13 at 07.06.13_af497365.jpg"
          alt="Back View"
        />

        <div className="w-[200px] h-[200px] absolute top-[150px] left-[70px] flex flex-col justify-between transition-opacity duration-500 opacity-0 group-hover:opacity-100 ">
          <button
            onClick={handleAddToCart}
            className="w-[200px] h-[70px] bg-black rounded-full border-3 text-white border-white text-xl cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Add to Cart!
          </button>

          <button onClick={handleseeItems} className="w-[200px] h-[70px] bg-black rounded-full border-3 text-white border-white text-xl cursor-pointer hover:scale-105 transition-transform duration-200">
            Customize 
          </button>
        </div>
      </div>
    )
  }

  export default Productcard
