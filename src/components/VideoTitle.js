import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-24 absolute text-white  w-screen  aspect-video'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className='flex gap-4'>
                <button className='bg-gray-200 text-black p-3 px-12 text-lg rounded-lg'>Play</button>
                <button className='bg-gray-200 text-black p-3 px-12 text-lg rounded-lg'>More Info</button>
            </div>
        </div >
    )
}

export default VideoTitle