import FilmCard, { type FilmCardProps } from './components/FilmCard';

type Film = Omit<FilmCardProps, 'onToggleWatched'> & {
  id: number;
};

const films: Film[] = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-fi',
    rating: 9,
    watched: true,
  },
  {
    id: 2,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Komedie',
    rating: 8,
    watched: false,
  },
  {
    id: 3,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-fi',
    rating: 11,
    watched: true,
  },
];

function App() {
  const handleToggleWatched = (title: string) => {
    console.log(`Změna stavu zhlédnutí pro: ${title}`);
  };

  return (
    <main>
      <section>
        <h1>Filmy</h1>
        {films.map((film) => (
          <FilmCard key={film.id} {...film} onToggleWatched={handleToggleWatched} />
        ))}
      </section>
    </main>
  );
}

export default App;
