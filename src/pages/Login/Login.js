import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='p-20  flex flex-col items-center'>
            <form className="p-10 shadow-2xl w-[450px] " >
                <p className='text-center text-3xl font-regular'>Login</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className='flex justify-between mt-3'>
                    <div>
                        <input type="checkbox" id="terms" name="terms" value="terms" />
                        <label htmlFor="terms"> {<>
                            Remember me
                        </>}</label>
                    </div>
                    <div>
                        <Link to='/terms' className="underline text-orange-500">Forgot Password?</Link>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-400 hover:border-orange-400 bg-orange-300 border-orange-300">Login</button>
                </div>
                <div className='text-center'>
                    <small className='mr-2'>New to Intern Opportunity?</small>
                    <Link to='/register' className="label-text-alt link link-hover text-orange-400">Create New Account</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;