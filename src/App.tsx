/* Stylingová metoda: Tailwind CSS (Over-the-top design) */
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
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 sm:p-8 font-sans transition-colors duration-500">
      
      {/* Ambient Animated Orbs in Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dark mode background gradient base */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-slate-900 dark:to-black transition-colors duration-500" />
        
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[35%] right-[15%] w-[45vw] h-[45vw] rounded-full bg-pink-400/10 dark:bg-pink-500/10 blur-[130px] animate-blob animation-delay-4000" />
        
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-10">
          {/* Main Hero Header Bar */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group border border-white/40 dark:border-white/5">
            
            {/* Glossy overlay sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <div className="flex items-center gap-4.5">
              <span className="p-3.5 bg-gradient-to-tr from-cyan-500 to-indigo-600 dark:from-cyan-400 dark:to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-indigo-500/20 dark:shadow-indigo-500/30 ring-2 ring-white/10 dark:ring-white/5 animate-pulse-glow">
                <svg className="w-8 h-8 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(6,182,212,0.15)]">
                  Watchlist
                </h1>
              </div>
            </div>
            
            {/* Header Actions */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                type="button"
                id="mark-all-watched-btn"
                onClick={markAllAsWatched}
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 dark:from-indigo-600/90 dark:to-cyan-600/90 dark:hover:from-indigo-600 dark:hover:to-cyan-500 text-white font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 active:scale-95 outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 dark:border-white/5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Odmáznout vše (Zhlédnuto)
              </button>
              <button
                type="button"
                id="theme-toggle-btn"
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="inline-flex items-center justify-center p-3 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium rounded-2xl text-sm transition-all duration-300 cursor-pointer shadow-md hover:shadow-indigo-500/10 active:scale-95 outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Přepnout motiv"
              >
                <svg className="w-5.5 h-5.5 block dark:hidden text-amber-500 fill-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                <svg className="w-5.5 h-5.5 hidden dark:block text-cyan-400 fill-cyan-950/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Holographic Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Celkem filmů */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden group hover:-translate-y-1.5 border border-indigo-500/20 dark:border-indigo-500/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/15">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full translate-x-8 -translate-y-8 blur-lg group-hover:scale-150 transition-all duration-500" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Celkem filmů</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-black text-gradient-cyan tracking-tight">{totalCount}</span>
                <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">snímků</span>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
                Knihovna databáze
              </div>
            </div>

            {/* Zhlédnuto */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden group hover:-translate-y-1.5 border border-emerald-500/20 dark:border-emerald-500/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/15">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full translate-x-8 -translate-y-8 blur-lg group-hover:scale-150 transition-all duration-500" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Zhlédnuto</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-black text-emerald-500 dark:text-emerald-400 tracking-tight">{watchedCount}</span>
                <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">videí</span>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-500 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                Dokončeno
              </div>
            </div>

            {/* Zbývá */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden group hover:-translate-y-1.5 border border-rose-500/20 dark:border-rose-500/10 hover:border-rose-500/40 dark:hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/15">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full translate-x-8 -translate-y-8 blur-lg group-hover:scale-150 transition-all duration-500" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Zbývá ke sledování</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-black text-rose-500 dark:text-rose-400 tracking-tight">{totalCount - watchedCount}</span>
                <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">zbývá</span>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-rose-500 dark:text-rose-400 font-semibold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-rose-400" />
                V pořadníku
              </div>
            </div>

            {/* Úspěšnost */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden group hover:-translate-y-1.5 border border-amber-500/20 dark:border-amber-500/10 hover:border-amber-500/40 dark:hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/15">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full translate-x-8 -translate-y-8 blur-lg group-hover:scale-150 transition-all duration-500" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Úroveň zhlédnutí</span>
              <div className="flex items-center justify-between gap-2 mt-2">
                <span className="text-4xl font-black text-gradient-gold tracking-tight">
                  {totalCount > 0 ? Math.round((watchedCount / totalCount) * 100) : 0}%
                </span>
                
                {/* Neon Circular Progress Ring */}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-200 dark:text-slate-800/80" />
                    <circle cx="24" cy="24" r="18" stroke="url(#goldGradient)" strokeWidth="3" fill="transparent"
                      strokeDasharray={113.1}
                      strokeDashoffset={113.1 - (113.1 * (totalCount > 0 ? (watchedCount / totalCount) : 0))}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out" />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-[10px] font-bold text-amber-500 dark:text-amber-400">XP</span>
                </div>
              </div>
              
              {/* Progress Bar with glowing shimmer */}
              <div className="mt-4">
                <div className="w-full bg-slate-200 dark:bg-slate-800/80 h-1.5 rounded-full overflow-hidden relative">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${totalCount > 0 ? (watchedCount / totalCount) * 100 : 0}%` }}
                  />
                  <div className="absolute inset-0 shimmer-effect animate-shimmer" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Add film panel form */}
          <div className="mb-10">
            <AddFilmForm />
          </div>
          
          {/* Watchlist content section */}
          <section aria-label="Seznam filmů">
            {films.length === 0 ? (
              <div className="text-center py-20 glass-panel rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-800 relative overflow-hidden group">
                {/* Floating ambient glow in container */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 dark:from-indigo-950/10 dark:to-pink-950/10 opacity-30" />
                
                <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-slate-200/50 dark:ring-slate-950/50">
                  <svg className="w-10 h-10 text-slate-400 dark:text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-700 dark:text-slate-200 tracking-tight">Vesmír zhlédnutých filmů zeje prázdnotou</h3>
                <p className="text-slate-400 dark:text-slate-500 mt-2 max-w-md mx-auto text-sm sm:text-base">
                  Zadej název, žánr a hodnocení výše k naplnění tvého vesmírného archivu.
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
        </main>
      </div>
    </div>
  );
}

export default App;
