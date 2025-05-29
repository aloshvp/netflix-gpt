import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
    return (
        <div className="p-4 py-8">
            <h1 className="text-xl font-semibold mb-4 text-white">{title}</h1>
            <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
                {movies?.map((movie) => (
                    <MovieCards
                        key={movie?.id}
                        posterPath={movie?.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
