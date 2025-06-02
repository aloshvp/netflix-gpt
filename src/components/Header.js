import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);


    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayName: displayName, photoURL: photoURL
                }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        //unsubscribe when component unmount
        return () => unsubscribe();

    }, []);

    const handleGptSearchClick = () => {
        //toggle gpt button
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center'>
            <div>
                <img
                    className='w-44'
                    src={LOGO}
                    alt='logo'
                />
            </div>
            {user &&
                <div className='flex gap-2'>
                    {showGptSearch &&
                        <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES?.map((lang) => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
                        </select>
                    }
                    <button
                        className='bg-white py-1 px-4 text-sm rounded-sm font-bold hover:bg-black hover:text-white transition-all duration-300'
                        onClick={handleGptSearchClick}
                    >{showGptSearch ? "Home" : "GPT SEARCH"}</button>
                    <img
                        src={user?.photoURL}
                        alt='user'
                        className='w-8 h-8'
                    />
                    <span className='text-white font-bold cursor-pointer' onClick={handleSignOut}>Sign out</span>
                </div>
            }
        </div >
    )
}

export default Header