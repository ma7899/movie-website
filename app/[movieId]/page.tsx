import Image from "next/image";

export const metadata = {
  title: "moviseb",
  description: "Movie website for the Internet",
  icons: {
    icon: "../public/Assets/Icons/logo.jpeg",
  },
};

export const generateStaticParams = async () => {
  const data = await fetch(
    `${process.env.baseUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie: any) => ({
    movie: movie.id.toString(),
  }));
};

const MovieDetail = async ({ params }: any) => {
  const { movieId } = params;
  const data = await fetch(
    `${process.env.baseUrl}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt=""
          width={4000}
          height={4000}
          quality={100}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
