import MovieCard from './MovieCard';
import HorizontalMovies from './HorizontalCards';

export default async function Home() {
  const data = await fetch(
    `${process.env.baseUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <>
      <main>
        <HorizontalMovies movies={res.results} />
      </main>
    </>
  );
}
