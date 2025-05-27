import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {

        //validate form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;
        //sign in/sign up

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid, email: email, displayName: displayName, photoURL: photoURL,
                        }));
                        console.log(user);
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });


        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }


    }

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay Content */}
            <div className="relative z-10">
                <Header />
                <div className="h-screen flex items-center justify-center">
                    <div className="bg-stone-950/90 h-fit p-14 rounded-md shadow-lg">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col gap-5">
                            <span className="text-white text-[32px] font-semibold">
                                {isSignInForm ? "Sign In" : "Sign Up"}
                            </span>
                            {!isSignInForm &&
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="p-3 w-[350px] bg-transparent border border-gray-500 text-white rounded-sm placeholder:text-[18px]"
                                    ref={name}
                                />
                            }
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="p-3 w-[350px] bg-transparent border border-gray-500 text-white rounded-sm placeholder:text-[18px]"
                                ref={email}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 w-[350px] bg-transparent border border-gray-500 text-white rounded-sm placeholder:text-[18px]"
                                ref={password}
                            />
                            <p className='text-red-500  font-bold'>{errorMessage}</p>
                            <button
                                className="p-2 text-white bg-red-600 rounded-md font-medium hover:bg-red-700 transition"
                                onClick={handleButtonClick}
                            >
                                {isSignInForm ? "Sign In" : "Sign Up"}
                            </button>
                            <p className='text-white text-sm cursor-pointer' onClick={toggleSignInForm}>
                                {isSignInForm ? "New to netflix? Sign Up Now" : "Already registered? Sign In Now"}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
