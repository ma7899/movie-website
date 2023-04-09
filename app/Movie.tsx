import Link from "next/link";
import Image from "next/image";

const Movie = ({
  title,
  id,
  posterPath,
  releaseDate,
}: {
  title: string;
  id: number;
  posterPath: string;
  releaseDate: string;
}) => {
  const imagePath = `https://image.tmdb.org/t/p/original${posterPath}`;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{releaseDate}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath}
          alt={title}
          width={1200}
          height={800}
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Movie;
