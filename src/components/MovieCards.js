import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCards = ({ posterPath }) => {
    return (
        <div className="inline-block w-[160px] mr-4">
            < img
                src={IMG_CDN + posterPath
                }
                alt="Movie Poster"
                title=""
                className="rounded-lg w-full h-auto"
            />
        </div>
    )
}

export default MovieCards