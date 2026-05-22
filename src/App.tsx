import { useEffect } from 'react';
import FilmCard from './components/FilmCard';
import AddFilmForm from './components/AddFilmForm';
import { useWatchlist } from './context/WatchlistContext';

function App() {
  const { films, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  useEffect(() => {
    document.title = `Watchlist (${watchedCount} / ${totalCount} zhlédnuto)`;
  }, [watchedCount, totalCount]);

  return (
    <main>
      <section>
        <h1>Filmy</h1>
        <h2>
          {watchedCount} / {totalCount} zhlédnuto
        </h2>
        <AddFilmForm />
        <button type="button" onClick={markAllAsWatched}>
          Označit vše jako zhlédnuté
        </button>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onToggleWatched={toggleWatched}
            onRemove={removeFilm}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
