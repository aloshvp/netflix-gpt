import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center'>
            <div>
                <img
                    className='w-44'
                    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt='logo'
                />
            </div>
            {user &&
                <div className='flex gap-2'>
                    <img
                        src={user?.photoURL}
                        alt='user'
                        className='w-8 h-8'
                    />
                    <span className='text-white font-bold cursor-pointer' onClick={handleSignOut}>Sign out</span>
                </div>
            }
        </div>
    )
}

export default Header