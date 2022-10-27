
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/UserContext';


const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => console.error(error))

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }

        updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error))

    }


    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
                <div className='mx-auto my-8'>
                    <h1>Please SignUp!!</h1>
                    <form onSubmit={handleSubmit} className=''>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Full Name</span>
                            </label>

                            <input type="text" placeholder="Input Your Name" className="input input-bordered"
                                name='name' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo URL</span>
                            </label>

                            <input type="text" placeholder="photo URL" className="input input-bordered"
                                name='photoURL' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            <input type="email" placeholder="Input your Email" className="input input-bordered"
                                name='email' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>

                            <input type="password" placeholder="Input your password" className="input input-bordered"
                                name='password' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>

                            <input type="password" placeholder="Input your password" className="input input-bordered"
                                name='confirm' />

                        </div>
                        <input className='btn btn-submit btn-primary w-full mt-4' type="submit" value="Sign Up" />
                    </form>
                    <p>Already Have an Account !! Please <Link className='text-amber-400' to='/login'>Login</Link></p>
                    <p className='text-error'>{error}</p>
                </div>
            </div>

        </div>
    );
};

export default Signup;