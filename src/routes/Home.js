import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?summary!=null&minimum_rating=8.8&sort_by=year'
      )).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='container'>
      {loading ?
        <div className='loader'>
          <span>Loading...</span>
        </div> :
        <div className='movies'>{movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
          />
        )

        )}</div>}
    </div>

  );
}

export default Home;

