import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              
              <div className='mt-6 space-y-3'>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder='Enter Your Email'
                  className='w-80 px-3 py-2 rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>

              <div className='mt-6 space-y-3'>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder='Enter Your Password'
                  className='w-80 px-3 py-2 rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>

              {/* Buttons */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Login</button>
                <p>Not Registered? 
                  <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
