import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpeg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";

const Registration = () => {

    const {createUser} = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    

    const handleSignUp = async(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        setRegistrationError('');
        setRegistrationSuccess(false);


        const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>?]+/;

        if (!/[A-Z]/.test(password)) {
            setRegistrationError('Password must contain at least one uppercase letter');
            return;
        }

        if (!specialCharRegex.test(password)) {
            setRegistrationError('Password must contain at least one special character');
            return;
        }


        createUser(email, password, name)
           .then(() => {
               console.log('Registration successful');
               setRegistrationSuccess(true);
               navigate('/login')
           })
           .catch(error => {
               console.error(error);
               setRegistrationError(error.message);
           })
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth,provider)
           .then((result) => {
            console.log('Google sign up successful', result);
            navigate('/');
            Swal.fire('Successfully Register!')
           })
           .catch((error) => {
            console.log('Google siggn up error', error);
           });
    }

    return (
        <div className="w-full h-full flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
                
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-2xl text-white font-bold my-4">Turn Your Ideas into reality</h1>
                    <p className="text-base text-white font-normal">Start for free and get attractive offers from the community</p>
                </div>
                <img className="w-full h-full object-cover" src={login} alt="" />
            </div>
            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
                <h1 className="text-5xl text-center mt-16 text-black font-semibold">Book Management</h1>

                <div className="w-full flex flex-col max-w-[450px]">
                    <div className="w-full flex flex-col my-10 text-center">
                        <h3 className="text-3xl font-semibold mb-4">Sign Up</h3>
                        <p className="text-base mb-2">Welcome! Registration now!</p>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control flex flex-col w-full">
                            <input type="name" name="name" placeholder="Your name" id="name" className="w-full text-black py-2 border-b border-black outline-none focus:outline-none bg-transparent my-4" />
                            <input type="email" name="email" placeholder="Your email address" id="email" className="w-full text-black py-2 border-b border-black outline-none focus:outline-none bg-transparent my-4" />

                            <input type="password" name="password" placeholder="Password" id="password" className="w-full text-black py-2 border-b border-black outline-none focus:outline-none bg-transparent my-2" />

                        </div>
                    
                        <div className="form-control w-full flex flex-col my-4">
                            
                            <input className="w-full bg-black text-white rounded-md p-4 text-center flex items-center justify-center" type="submit" value="Sign up" />

                        </div>
                    </form>
                    {registrationError && <p className="text-emerald-700 m-auto">{registrationError}</p>}
                    {registrationSuccess && <p className="text-emerald-700 m-auto">Registration Successful</p>}
                    <div className="w-full flex items-center justify-center relative py-6 mt-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-xl absolute text-black/80 bg-[#f5f5f5]">or sign up with</p>
                    </div>
                    <div className="flex items-center mt-6 -mx-2 mb-10">
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    >
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>
                        <span className="hidden  sm:inline">Google</span>
                    </button>
                </div>
                </div>
                <div className="w-full flex items-center justify-center mb-12">
                    <p className="text-md font-normal text-black">Already have an account? <Link className="font-semibold underline underline-offset-2 cursor-pointer" to="/login">Login</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;