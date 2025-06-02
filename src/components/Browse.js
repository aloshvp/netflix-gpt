import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearchPage';
import Header from './Header'
import MainContainer from './MainConatiner';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return (
        <div>
            <Header />
            {showGptSearch ?
                < GptSearch />
                :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default Browse
