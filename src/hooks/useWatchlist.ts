import { useState } from 'react';
import type { Film } from '../types/film.types';

export const useWatchlist = (initialFilms: Film[]) => {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  const toggleWatched = (title: string) => {
    setFilms(prevFilms =>
      prevFilms.map(film =>
        film.title === title ? { ...film, watched: !film.watched } : film
      )
    );
  };

  const markAllAsWatched = () => {
    setFilms(prevFilms =>
      prevFilms.map(film => ({ ...film, watched: true }))
    );
  };

  return {
    films,
    toggleWatched,
    markAllAsWatched,
  };
};
