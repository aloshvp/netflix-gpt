import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='bg-black p-8 w-[650px] flex' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className='p-4 mr-4 w-[80%] rounded-md'
                />
                <button
                    className='py-2 px-4 bg-red-400 text-white rounded-lg w-[20%]'
                >{lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar