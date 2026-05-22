import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Film } from '../types/film.types';
import { fetchFilms } from '../api/films';

export interface WatchlistContextValue {
  films: Film[];
  addFilm: (film: { title: string; year: number; genre: string; rating: number }) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

interface WatchlistProviderProps {
  children: ReactNode;
}

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [films, setFilms] = useState<Film[]>([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
  });

  useEffect(() => {
    if (data && films.length === 0) {
      setFilms(data);
    }
  }, [data, films.length]);

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
      value={{
        films,
        addFilm,
        removeFilm,
        toggleWatched,
        markAllAsWatched,
        isLoading,
        isError,
        refetch: () => {
          refetch();
        },
      }}
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
