import { useEffect } from 'react';
import FilmCard from './components/FilmCard';
import type { Film } from './types/film.types';
import { useWatchlist } from './hooks/useWatchlist';

const initialFilms: Film[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-fi',
    rating: 9,
    watched: true,
  },
  {
    id: '2',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Komedie',
    rating: 8,
    watched: false,
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-fi',
    rating: 11,
    watched: true,
  },
];

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist(initialFilms);

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;
    document.title = `Watchlist (${watchedCount} / ${totalCount} zhlédnuto)`;
  }, [films]);

  return (
    <main>
      <section>
        <h1>Filmy</h1>
        <button type="button" onClick={markAllAsWatched}>
          Označit vše jako zhlédnuté
        </button>
        {films.map((film) => (
          <FilmCard key={film.id} {...film} onToggleWatched={toggleWatched} />
        ))}
      </section>
    </main>
  );
}

export default App;
