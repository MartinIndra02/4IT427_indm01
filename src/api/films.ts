import type { Film } from '../types/film.types';


export async function fetchFilms(): Promise<Film[]> {
  const response = await fetch('/films.json');
  if (!response.ok) {
    throw new Error(`Nepodařilo se načíst filmy: ${response.statusText}`);
  }
  return response.json();
}
