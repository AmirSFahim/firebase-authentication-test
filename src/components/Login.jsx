// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";


const Login = () => {
    const {singInUser , googlePopUp} =useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)


        singInUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/')
        })
        .catch((error) =>{ console.log(error)})
    }
    const handleGoogle = ()=>{
        googlePopUp()
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>


                    <div className="ml-8"><p>if havnt id go to<button className="btn btn-link"> <Link to={'/register'}>register</Link></button>
                    <button className="btn btn-link"> <Link to={'/'}>Home</Link></button></p></div>
                    <button onClick={handleGoogle} className="btn btn-ghost">google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;