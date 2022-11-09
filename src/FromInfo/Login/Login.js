import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../astes/20944201.jpg'
import { AuthContext } from '../../UseContext/UseContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {userSingIn,providerLogIn,providerGitHub} = useContext(AuthContext);
    const [error, setError] = useState(``);

    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSingIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from,{replace:true})
        })
        .then(error => {
            console.log(error)
            setError(error.message)
        });
    }

    const googleSingIn =() => {
        providerLogIn(googleProvider )
        .then(res => {
            const user = res.user;
            navigate('/')
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handdleGithub  = () => {
        providerGitHub(githubProvider)
        .then(res => {
            const user = res.user;
            navigate('/')
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        
                    </div>
                    
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>Are You New? <Link className='text-orange-600 font-bold' to="/singup">Sign Up</Link> </p>

                <div className='flex items-center justify-center m-3'>         
                     <button onClick={googleSingIn} className='flex items-center mr-2 '><FaGoogle className='mr-2'></FaGoogle>Google</button>
                     <button onClick={handdleGithub} className='flex items-center '><FaGithub className='mr-2'></FaGithub> GitHub</button>
                     <p className=''>{error}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;