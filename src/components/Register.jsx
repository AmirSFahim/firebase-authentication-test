import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    
    const handleRegister = e =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        console.log(email,password , name)

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch((error) =>{ console.log(error)})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>


                    <div className="ml-8"><p>if havnt id go to<button className="btn btn-link"> <Link to={'/login'}>Login</Link></button>
                    <button className="btn btn-link"> <Link to={'/'}>Home</Link></button></p></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;