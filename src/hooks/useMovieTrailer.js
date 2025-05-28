import { useEffect } from 'react'
import { API_CONSTANT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = ({ movieId = "950387" }) => {

    const dispatch = useDispatch();
    //fetch trailer video and updating the store
    const getMovieViedos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_CONSTANT);
        const json = await data.json();

        const filterData = json?.results?.filter((video) => video?.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieViedos();
    }, []);

}

export default useMovieTrailer;