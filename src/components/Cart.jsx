import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, handleCheckoutVisiblity, removeFromCart, toggleCart } from '../features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  const handleCheckout =()=>{
    dispatch(handleCheckoutVisiblity())
  }


  const handleIncrement = (pId) => {

    // console.log(quantity)
    dispatch(addToCart({ id:pId}));
  }


  const handleDecrement = (pId) => {
    // console.log(cartItems.decal)
    dispatch(decreaseQuantity( {id:pId} ));
  }

  const handlleDelete = () => {
    try {
      dispatch(removeFromCart())
      toast('Removed from Cart Succesfully');

    } catch (error) {
      toast('An unexpected error occured');

    }

  }
  const handleClose = () => {
    dispatch(toggleCart());
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Shipping fee: only apply if there’s something in the cart
  const shipping = subtotal > 0 ? 300 : 0;

  // Final total
  const total = subtotal + shipping;

  return (
    <>
      <ToastContainer />
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={handleClose}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`w-full sm:w-96 h-screen bg-white fixed right-0 top-0 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Shopping Cart ({cartItems.length})
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-280px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-white rounded-md overflow-hidden">
                    <img
                      src={item.imagePath || '/api/placeholder/96/96'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                      <div className="text-sm text-gray-600 space-y-0.5">
                        {item.color && <p>Color: {item.color}</p>}
                        {item.size && <p>Size: {item.size}</p>}
                        {item.decal && <p>Decal: {item.decal}</p>}
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={()=>handleDecrement(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md transition-colors active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={()=>handleIncrement(item.id)}
                          className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md transition-colors active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-gray-800">Rs{(item.quantity*item.price ).toFixed(2)}</p>
                        <button
                          onClick={handlleDelete}
                          className="w-7 h-7 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 rounded-md transition-colors active:scale-95"
                          aria-label="Remove item"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">Rs{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Rs{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-300">
              <span>Total</span>
              <span>Rs{total.toFixed(2)}</span>
            </div>
            <button onClick={()=>handleCheckout()} className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors active:scale-98">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;