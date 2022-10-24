import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, user, googleSignIn, facebookSignIn, setLoading } = useContext(AuthContext);

    console.log('coming from login page', user);
    const nevigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //console.log(from);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('coming from login page', user);
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
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

    const handleSignIn = (event) => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                if (user.emailVerified) {
                    nevigate(from, { replace: true });
                    toast.success("Congratulations! You are signed in");
                } else {
                    toast.error("Your email is not verified");
                }
            })
            .catch(e => {
                console.error(e)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    useEffect(() => {
        if (user) {
            if (user.emailVerified) {
                nevigate(from, { replace: true });
                toast.success("Congratulations! You are signed in");
            } else {
                toast.error("Your email is not verified");
            }
        }
    }, [user])


    return (
        <div className='px-20  py-10  flex flex-col items-center'>
            <form onSubmit={handleSignIn} className="p-10  border-2 w-[450px] " >
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
                    <div >
                        <label htmlFor="my-modal-3" className="cursor underline text-orange-500">Forgot Password?</label>
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
            <div className='mb-3 mt-3'>
                ----------------- or ----------------
            </div>
            <div className='flex flex-col gap-3 mb-5 w-[25%]'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-full btn-warning flex gap-2"><FaGoogle /> Login with Google</button>
                <button onClick={handleFacebookSignIn} className="btn btn-outline btn-primary rounded-full flex gap-2"><FaFacebook />Login with Facebook</button>
            </div>

            {/* Modal body */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal jus">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Please enter your email to reset password</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 flex-row justify-end">
                        <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-400 hover:border-orange-400 bg-orange-300 border-orange-300">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;