import { useEffect } from 'react'
import { API_CONSTANT } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'


const usePopularMovies = () => {
    //fetch Data from TMDB api and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_CONSTANT);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;