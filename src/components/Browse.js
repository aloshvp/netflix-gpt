import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './Header'
import MainContainer from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return (
        <div>
            <Header></Header>
            <MainContainer />
            <SecondaryContainer />
            {/*
            -MainContainer
                -videobackground
                -videotitle
            -SecondaryContainer
                -
            */}
        </div>
    )
}

export default Browse
