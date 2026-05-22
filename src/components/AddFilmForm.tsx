import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function AddFilmForm() {
  const { addFilm } = useWatchlist();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState<number | ''>('');

  const quickGenres = ['Sci-Fi', 'Komedie', 'Drama', 'Thriller', 'Akční', 'Horor'];
  const currentYear = new Date().getFullYear();
  const quickYears = [currentYear, currentYear - 1, currentYear - 2, 2020, 2010];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !year || !genre.trim() || rating === '') {
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
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-black/50 border border-white/20 dark:border-white/5 relative overflow-hidden group/form"
    >
      {/* Decorative accent light */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover/form:bg-indigo-500/15 transition-all duration-500" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover/form:bg-cyan-500/15 transition-all duration-500" />

      <h2 className="text-xl font-extrabold mb-6 text-slate-800 dark:text-white flex items-center gap-2.5">
        <span className="p-1.5 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 text-cyan-500 dark:text-cyan-400 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Vložit film do archivu
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Název filmu */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Název snímku
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="např. Interstellar..."
            required
            className="w-full bg-white/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3.5 focus:border-cyan-500/80 focus:ring-4 focus:ring-cyan-500/10 dark:focus:ring-cyan-500/5 outline-none transition-all text-slate-800 dark:text-white font-medium text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
          />
        </div>

        {/* Rok vydání */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="year"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Rok vydání
          </label>
          <div className="relative">
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="např. 2014"
              required
              className="w-full bg-white/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3.5 focus:border-cyan-500/80 focus:ring-4 focus:ring-cyan-500/10 dark:focus:ring-cyan-500/5 outline-none transition-all text-slate-800 dark:text-white font-medium text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
          </div>
          {/* Quick chips for Year */}
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {quickYears.map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => setYear(String(yr))}
                className="text-[10px] font-extrabold px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800/65 transition-all cursor-pointer"
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Žánr */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="genre"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Žánr filmu
          </label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="např. Sci-Fi, Drama..."
            required
            className="w-full bg-white/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3.5 focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/5 outline-none transition-all text-slate-800 dark:text-white font-medium text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
          />
          {/* Quick chips for Genre */}
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {quickGenres.map((gen) => (
              <button
                key={gen}
                type="button"
                onClick={() => setGenre(gen)}
                className="text-[10px] font-extrabold px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800/65 transition-all cursor-pointer"
              >
                +{gen}
              </button>
            ))}
          </div>
        </div>

        {/* Hodnocení (1-10) */}
        <div className="flex flex-col gap-2">
          <label
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Hodnocení snímku ({rating || 'Zvolte rating'})
          </label>
          
          {/* Interactive Rating Pills instead of default number input */}
          <div className="flex flex-wrap items-center gap-1.5 py-1">
            {Array.from({ length: 10 }).map((_, i) => {
              const val = i + 1;
              const isSelected = rating === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => setRating(val)}
                  className={`w-9.5 h-9.5 rounded-xl font-black text-xs flex items-center justify-center transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-tr from-cyan-400 to-indigo-600 dark:from-cyan-400 dark:to-indigo-500 text-white border-transparent shadow-lg shadow-indigo-500/25 scale-110 ring-2 ring-cyan-400 dark:ring-cyan-300'
                      : 'bg-white/80 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/80 shadow-sm'
                  }`}
                >
                  {val}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-fuchsia-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.008] active:scale-[0.99] border border-white/10 dark:border-white/5 flex items-center justify-center gap-2 focus:ring-2 focus:ring-cyan-500"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Přidat film do databáze
      </button>
    </form>
  );
}

export default AddFilmForm;
