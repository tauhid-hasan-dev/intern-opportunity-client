import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, googleSignIn, facebookSignIn, githubSignIn, updateUser, verifyEmail } = useContext(AuthContext);
    const nevigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                nevigate('/');
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleFacebookSignIn = () => {
        facebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }




    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        //console.log(name, email, password, confirm)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                nevigate('/');
                handleUpdateUser(name);
                sendVerifyEmail();
                toast.success('Your are registered.Please verify your email')
                //console.log(user);
            })
            .catch(e => console.error(e))
    }

    const handleUpdateUser = (name) => {
        const profile = {
            displayName: name
        }
        updateUser(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const sendVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className="px-20 py-10  flex flex-col items-center">
            <form onSubmit={handleCreateUser} className="p-10 border-2 w-[450px] ">
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
                        type="password"
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
                <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-full btn-warning flex gap-2"><FaGoogle /> Login with Google</button>
                <button onClick={handleFacebookSignIn} className="btn btn-outline btn-primary rounded-full flex gap-2"><FaFacebook />Login with Facebook</button>
                <button onClick={handleGithubSignIn} className="btn btn-outline  rounded-full flex gap-2"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default Register;