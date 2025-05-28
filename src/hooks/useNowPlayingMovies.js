import React, { useEffect } from 'react'
import { API_CONSTANT } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


const useNowPlayingMovies = () => {
    //fetch Data from TMDB api and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANT);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;