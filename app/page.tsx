import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `${process.env.baseUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            id={movie.id}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
