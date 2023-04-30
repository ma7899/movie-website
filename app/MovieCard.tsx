import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classNames';

const MovieCard = ({
  title,
  className,
  id,
  movie,
  src,
}: {
  className?: string;
  title?: string;
  id: number;
  movie: any;
  src: string;
}) => {
  const MovieCardClassName = classNames(
    'flex-none w-64 h-96 relative',
    className
  );
  const imagePath = `https://image.tmdb.org/t/p/original`;

  return (
    <div
      key={movie.id}
      className={MovieCardClassName}
    >
      <Link href={`/${id}`}>
        <div className="relative w-full h-full">
          <Image
            className="object-cover rounded-lg shadow-md"
            src={imagePath + src}
            alt={movie.title}
            fill
            quality={100}
          />
          <div className="absolute inset-0 rounded-lg shadow-md bg-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 opacity-60 rounded-lg" />
            <div className="absolute inset-0 p-4 overflow-hidden text-ellipsis">
              <div className="h-full flex flex-col gap-y-2">
                <h2 className="text-xl font-bold text-white">{movie.title}</h2>
                <p className="text-sm font-semibold text-gray-300">
                  {movie.release_date}
                </p>
                <p className=" text-gray-300 line-clamp-[10]">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
