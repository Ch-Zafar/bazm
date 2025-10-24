    import React, { useContext } from 'react'
    import { useForm } from "react-hook-form"
    import { authcontext } from '../pages/auth/Login_SignUp'
    import { useDispatch } from 'react-redux'
    import { Login } from "../features/authSlice";



    const Loginpage = () => {
        const dispatch= useDispatch();
        const setLogin =useContext(authcontext);
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()

        const onSubmit = (data) => {
            try {
                dispatch(Login({email:data.email,password:data.password}))
                console.log(data.password)
            } catch (error) {
                    console.log('error:',error)
            }
        }

        console.log(watch("example"))
        return (
            <div className='w-full h-3/4 flex flex-col items-center'>
                <h1 className='font-bold text-3xl'>Login to your account</h1>
                <form className='w-full h-full mt-10 flex flex-col justify-evenly items-center' onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='w-3/4  rounded-xl p-3 bg-white/60  focus:outline-none' placeholder='Email' {...register("email")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='w-3/4  rounded-xl p-3 bg-white/60 focus:outline-none ' placeholder='Password' {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='flex'><p className='text-gray-400'>Dont have a account.</p>
                        <p onClick={()=>{setLogin(false)}} className='text-gray-400 font-bold cursor-pointer'>SignUp..</p></div>

                    <input className='w-1/2 p-3 bg-black text-white rounded-xl hover:bg-black/90 cursor-pointer duration-200 focus:scale-90 transition-all' type='submit' value="Login" />
                </form>
            </div>
        )
    }

    export default Loginpage