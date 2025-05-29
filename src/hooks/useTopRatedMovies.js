import { useEffect } from 'react'
import { API_CONSTANT } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'


const useTopRatedMovies = () => {
    //fetch Data from TMDB api and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, [])

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_CONSTANT);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;