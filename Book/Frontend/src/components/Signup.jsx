import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password // Fixed typo here
        };

        try {
            const response = await axios.post("http://localhost:4000/user/signup", userInfo);
            console.log(response.data);
            alert("Signup successful");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to signup. Please try again."); // Provide user-friendly error message
        }
    };

    return (
        <>
            <div id="my_modal_3" className="flex h-screen items-center justify-center">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Signup</h3>

                        <div className='mt-6 space-y-3'>
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-2 rounded-md outline-none' {...register("fullname", { required: true })} />
                        </div>

                        <div className='mt-6 space-y-3'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-2 rounded-md outline-none' {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div className='mt-6 space-y-3'>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-2 rounded-md outline-none' {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>
                        
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Signup</button>
                            <div className='flex justify-around mt-4 '>
                                <p>Have an account? <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
