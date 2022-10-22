import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
    return (
        <div className="px-20 py-10  flex flex-col items-center">
            <form className="p-10 border-2 w-[450px] ">
                <p className="text-center text-3xl font-regular">Create a new Account</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="confirm"
                        name="confirm"
                        placeholder="Confirm password"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div >
                    <input type="checkbox" id="terms" name="terms" value="terms" />
                    <label htmlFor="terms"> {<>
                        Accept <Link to='/terms' className="underline text-blue-500">Terms and Conditions</Link>
                    </>}</label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-btn-color text-black border-btn-color bg-orange-300 border-orange-300   hover:bg-orange-500 hover:border-orange-500" >
                        Sign Up
                    </button>
                </div>
                <div className="text-center">
                    <small className="mr-2">Already have an account?</small>
                    <Link
                        to="/login"
                        className="label-text-alt link link-hover text-orange-400"
                    >
                        Please Login
                    </Link>
                </div>
            </form>
            <div className='mb-3 mt-3'>
                ----------------- or ----------------
            </div>
            <div className='flex flex-col gap-3 mb-5 w-[25%]'>
                <button className="btn btn-outline rounded-full btn-warning flex gap-2"><FaGoogle /> Login with Google</button>
                <button className="btn btn-outline btn-primary rounded-full flex gap-2"><FaFacebook />Login with Facebook</button>
            </div>
        </div>
    );
};

export default Register;