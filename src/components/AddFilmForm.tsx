import { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';

function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !year || !genre.trim() || !rating) {
      return;
    }

    addFilm({
      title: title.trim(),
      year: Number(year),
      genre: genre.trim(),
      rating: Number(rating),
    });

    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Název filmu: </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Rok vydání: </label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Žánr: </label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Hodnocení (1-10): </label>
        <input
          id="rating"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <button type="submit">Přidat film</button>
    </form>
  );
}

export default AddFilmForm;
