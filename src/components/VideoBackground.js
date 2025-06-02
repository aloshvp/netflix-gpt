import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {

    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);

    return (
        <div className="w-full">
            <iframe
                className="w-full aspect-video bg-gradient-to-r from-black"
                // src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div >
    )
}

export default VideoBackground;