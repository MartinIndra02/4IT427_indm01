import { useEffect } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import FilmCard from '../components/FilmCard';

export default function WatchlistPage() {
  const { films, toggleWatched, removeFilm, markAllAsWatched, isLoading, isError, refetch } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  useEffect(() => {
    document.title = `Watchlist (${watchedCount} / ${totalCount} zhlédnuto)`;
  }, [watchedCount, totalCount]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 glass-panel rounded-3xl border border-white/40 dark:border-white/5 shadow-xl">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-lg font-bold text-slate-500 dark:text-slate-400 animate-pulse">
          Načítám filmy...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 glass-panel rounded-3xl border border-rose-500/20 dark:border-rose-500/10 bg-rose-500/5 dark:bg-rose-500/[0.02] shadow-xl">
        <div className="p-4 bg-rose-100 dark:bg-rose-950/40 rounded-full w-16 h-16 flex items-center justify-center mb-5 shadow-sm">
          <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-rose-700 dark:text-rose-400 mb-2">
          Nepodařilo se načíst filmy
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-6">
          Došlo k chybě při stahování dat z filmového archivu. Zkontrolujte připojení nebo akci opakujte.
        </p>
        <button
          type="button"
          onClick={refetch}
          className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-500 text-white font-bold px-6 py-3 rounded-2xl text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-rose-500/25 active:scale-95 outline-none focus:ring-2 focus:ring-rose-500"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.706 8.5" />
          </svg>
          Zkusit znovu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Horní panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-white/40 dark:border-white/5">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
            Můj Watchlist
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-semibold">
            {watchedCount} / {totalCount} zhlédnuto
          </p>
        </div>

        <button
          type="button"
          id="mark-all-watched-btn"
          onClick={markAllAsWatched}
          className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 dark:from-indigo-600/90 dark:to-cyan-600/90 dark:hover:from-indigo-600 dark:hover:to-cyan-500 text-white font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 active:scale-95 outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 dark:border-white/5"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Označit vše jako zhlédnuté
        </button>
      </div>

      {/* Grid s kartami filmů */}
      <section aria-label="Seznam filmů">
        {films.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 dark:from-indigo-950/10 dark:to-pink-950/10 opacity-30" />
            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-slate-200/50 dark:ring-slate-950/50">
              <svg className="w-10 h-10 text-slate-400 dark:text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-700 dark:text-slate-200 tracking-tight">Vesmír zhlédnutých filmů zeje prázdnotou</h3>
            <p className="text-slate-400 dark:text-slate-500 mt-2 max-w-md mx-auto text-sm sm:text-base">
              Zadej název, žánr a hodnocení v sekci přidání k naplnění tvého vesmírného archivu.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                film={film}
                onToggleWatched={toggleWatched}
                onRemove={removeFilm}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
