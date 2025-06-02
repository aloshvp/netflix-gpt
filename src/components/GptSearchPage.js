import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
    return (
        <div>
            <div>
                <img
                    src={BG_URL}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            </div>
            <div className='relative z-1'>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div >
    )
}

export default GptSearchPage;
