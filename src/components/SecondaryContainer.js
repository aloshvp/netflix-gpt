import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store?.movies)

    return (

        movies?.nowPlayingMovies && (
            <div className='bg-black'>
                <div div className='-mt-52 relative z-10' >
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                </div >
                <MovieList title={"Top Rated"} movies={movies?.topRated} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
            </div>
        )
    )
}

export default SecondaryContainer