import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Film } from '../types/film.types';

export interface WatchlistContextValue {
  films: Film[];
  addFilm: (film: { title: string; year: number; genre: string; rating: number }) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

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

interface WatchlistProviderProps {
  children: ReactNode;
}

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  const addFilm = (newFilm: { title: string; year: number; genre: string; rating: number }) => {
    const film: Film = {
      id: crypto.randomUUID(),
      title: newFilm.title,
      year: newFilm.year,
      genre: newFilm.genre,
      rating: newFilm.rating,
      watched: false,
    };
    setFilms((prevFilms) => [...prevFilms, film]);
  };

  const removeFilm = (id: string) => {
    setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
  };

  const toggleWatched = (id: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === id ? { ...film, watched: !film.watched } : film
      )
    );
  };

  const markAllAsWatched = () => {
    setFilms((prevFilms) =>
      prevFilms.map((film) => ({ ...film, watched: true }))
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === null) {
    throw new Error('useWatchlist musí být použit uvnitř WatchlistProvider');
  }
  return context;
};
