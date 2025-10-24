import React, { useState, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Login } from '../../features/authSlice';
import Select from 'react-select'
import countryList from 'react-select-country-list'

const Checkout = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    const dispatch = useDispatch();
    const checkoutVisible = useSelector((state) => state.cart.checkoutVisible);
    const cartItem = useSelector((state) => state.cart.items);
    const [phone, setPhone] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        try {
            dispatch(Login({ email: data.email, password: data.password }));
            console.log(data);
        } catch (error) {
            console.log('error:', error);
        }
    };

    const subtotal = cartItem.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const shipping = subtotal > 0 ? 300 : 0;
    const total = subtotal + shipping;

    return (
        <div className={`fixed top-0 left-0 w-full h-screen overflow-y-auto bg-gray-200 ${checkoutVisible ? 'opacity-100 z-50' : "opacity-0 -z-10"} transition-all duration-300`}>
            <div className='w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-10 flex flex-col lg:flex-row gap-6 lg:gap-8'>
                
                {/* Form Section */}
                <div className='w-full lg:w-1/2'>
                    <form
                        className="w-full mt-4 md:mt-10 flex flex-col gap-4 md:gap-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>Checkout</h2>
                        
                        {/* Full Name */}
                        <div className='w-full'>
                            <input
                                className="w-full rounded-xl p-3 md:p-4 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Full Name"
                                {...register("fullName", { required: true })}
                            />
                            {errors.fullName && <span className='text-red-500 text-sm mt-1 block'>Full Name is required</span>}
                        </div>

                        {/* Email */}
                        <div className='w-full'>
                            <input
                                className="w-full rounded-xl p-3 md:p-4 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500 text-sm mt-1 block'>Email is required</span>}
                        </div>

                        {/* Password */}
                        <div className='w-full'>
                            <input
                                className="w-full rounded-xl p-3 md:p-4 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Password"
                                type="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500 text-sm mt-1 block'>Password is required</span>}
                        </div>

                        {/* Phone Input */}
                        <div className="w-full">
                            <PhoneInput
                                country={"us"}
                                value={phone}
                                onChange={setPhone}
                                containerStyle={{
                                    width: "100%",
                                    borderRadius: "12px",
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    border: "1px solid #ccc",
                                    overflow: "hidden",
                                }}
                                inputStyle={{
                                    width: "100%",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    fontSize: "16px",
                                    outline: "none",
                                    padding: "12px 14px 12px 58px",
                                }}
                                buttonStyle={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                }}
                            />
                        </div>

                        {/* Country, City, Postal Code */}
                        <div className='w-full flex flex-col md:flex-row gap-3 md:gap-4'>
                            <div className='w-full md:w-1/2'>
                                <Select 
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            borderRadius: "12px",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            border: "1px solid #ccc",
                                            padding: "4px",
                                        })
                                    }}
                                    options={options} 
                                    value={value} 
                                    onChange={changeHandler} 
                                    placeholder="Select Country"
                                />
                            </div>
                            <input
                                className="w-full md:w-1/4 rounded-xl p-3 md:p-4 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="City"
                                {...register("city", { required: true })}
                            />
                            <input
                                className="w-full md:w-1/4 rounded-xl p-3 md:p-4 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Postal Code"
                                {...register("postalCode", { required: true })}
                            />
                        </div>

                        {/* Submit Button */}
                        <input
                            className="w-full md:w-2/3 lg:w-1/2 mx-auto p-3 md:p-4 bg-black text-white rounded-xl hover:bg-black/90 cursor-pointer duration-200 active:scale-95 transition-all text-base md:text-lg font-semibold mt-4"
                            type="submit"
                            value="Buy Now"
                        />
                    </form>
                </div>

                {/* Cart Items Section */}
                <div className='w-full lg:w-1/2 flex flex-col gap-4 pb-6 lg:pb-0'>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mt-4 md:mt-10'>Order Summary</h2>
                    
                    <div className='w-full max-h-[500px] lg:max-h-[600px] overflow-y-auto flex flex-col items-center gap-4'>
                        {cartItem.map((item) => (
                            <div key={item.id} className='w-full rounded-2xl flex flex-col sm:flex-row items-center p-4 md:p-5 bg-white/60 gap-4'>
                                <div className='w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0'>
                                    <img src={item.imagePath} alt="" className='w-full h-full object-cover rounded-xl' />
                                </div>
                                <div className='flex flex-col w-full gap-2'>
                                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm md:text-base'>
                                        <p><span className='font-semibold'>Color:</span> {item.color}</p>
                                        <p><span className='font-semibold'>Size:</span> {item.size}</p>
                                        <p><span className='font-semibold'>Image:</span> {item.decal}</p>
                                        <p><span className='font-semibold'>Price:</span> Rs{item.price}</p>
                                    </div>
                                    <p className='font-bold text-sm md:text-base'>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cartItem.length > 0 && (
                        <div className="border-t border-gray-300 p-4 md:p-6 bg-white/80 rounded-xl">
                            <div className="flex justify-between text-sm md:text-base mb-2">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">Rs{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm md:text-base mb-2">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">Rs{shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg md:text-xl font-semibold pt-3 border-t border-gray-400">
                                <span>Total</span>
                                <span>Rs{total.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;