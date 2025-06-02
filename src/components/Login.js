import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {

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
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid, email: email, displayName: displayName, photoURL: photoURL,
                        }));
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
                src={BG_URL}
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
