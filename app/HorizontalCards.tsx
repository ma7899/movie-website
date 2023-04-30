import Image from 'next/image';
import { FunctionComponent } from 'react';
import MovieCard from './MovieCard';

interface MoviesProps {
  movies: any[];
  title?: string;
}

const imagePath = 'https://image.tmdb.org/t/p/original';

const HorizontalMovies: FunctionComponent<MoviesProps> = ({
  movies,
  title,
}) => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="flex overflow-x-auto space-x-6 pb-2 sm:scrollbar-thin sm:scrollbar-thumb-gray-400 sm:scrollbar-track-rounded-xl sm:scrollbar-thumb-rounded-xl">
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            movie={movie}
            src={imagePath + movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalMovies;
