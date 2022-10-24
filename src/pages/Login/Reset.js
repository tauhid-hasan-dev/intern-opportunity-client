import React from 'react';

const Reset = ({ handleResetPassword }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal jus">
                <form onSubmit={handleResetPassword} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Please enter your email to reset password</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 flex-row justify-end">
                        <button type="submit" className="btn bg-btn-color text-black border-btn-color hover:bg-orange-400 hover:border-orange-400 bg-orange-300 border-orange-300">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reset;