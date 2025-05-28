import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

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
