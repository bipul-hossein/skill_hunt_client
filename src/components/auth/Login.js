import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/UserContext';
import { FaGoogle, FaGithub } from "react-icons/fa"
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const Login = () => {


    const [error, setError] = useState(null);
    const { signIn, googleLogin,gitHubLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    const handleGoogleSign = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
               
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleGitHubSign=()=>{
        gitHubLogin(gitHubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
           
            navigate(from, { replace: true })
        })
        .catch(error => console.error(error))

    }

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
                <div className='mx-auto my-8'>
                    <h1>Please Login!!</h1>
                    <form onSubmit={handleSubmit} className=''>
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
                        <input className='btn btn-submit btn-primary w-full mt-4' type="submit" value="Login" />
                    </form>
                    <p>Don,t have a account <Link className='text-amber-400' to='/signup'>Sign Up</Link></p>
                    <p className='text-error'>{error}</p>
                    <h1 className='mb-4'>OR,</h1>
                    <div className="btn-group btn-group-vertical w-full">
                        <button onClick={handleGoogleSign} className="btn btn-submit mb-2"><FaGoogle className='mr-2' /> Login with Google</button>
                        <button onClick={handleGitHubSign} className="btn btn-submit mb-2"><FaGithub className='mr-2' /> Login with Github</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;