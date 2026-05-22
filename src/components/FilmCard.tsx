import type { Film } from '../types/film.types';

export interface FilmCardProps {
  film: Film;
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

const getGenreTheme = (genre: string) => {
  const g = genre.toLowerCase();
  if (g.includes('sci-fi') || g.includes('scifi') || g.includes('science') || g.includes('fantasy')) {
    return {
      border: 'border-cyan-500/20 dark:border-cyan-500/10 hover:border-cyan-500/60 dark:hover:border-cyan-500/50',
      badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 dark:border-cyan-500/25',
      textGlow: 'text-cyan-600 dark:text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]',
      glowClass: 'neon-glow-cyan',
      iconColor: 'text-cyan-500',
      tag: 'SCI-FI CORE',
    };
  }
  if (g.includes('komedie') || g.includes('comedy') || g.includes('humor') || g.includes('romance')) {
    return {
      border: 'border-amber-500/20 dark:border-amber-500/10 hover:border-amber-500/60 dark:hover:border-amber-500/50',
      badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/25',
      textGlow: 'text-amber-600 dark:text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]',
      glowClass: 'neon-glow-pink',
      iconColor: 'text-amber-500',
      tag: 'ENTERTAINMENT',
    };
  }
  if (g.includes('drama') || g.includes('thriller') || g.includes('akční') || g.includes('action') || g.includes('horor') || g.includes('horror')) {
    return {
      border: 'border-pink-500/20 dark:border-pink-500/10 hover:border-pink-500/60 dark:hover:border-pink-500/50',
      badgeBg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20 dark:border-pink-500/25',
      textGlow: 'text-pink-600 dark:text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]',
      glowClass: 'neon-glow-pink',
      iconColor: 'text-pink-500',
      tag: 'DRAMATIC FORCE',
    };
  }
  // Default Indigo Theme
  return {
    border: 'border-indigo-500/20 dark:border-indigo-500/10 hover:border-indigo-500/60 dark:hover:border-indigo-500/50',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 dark:border-indigo-500/25',
    textGlow: 'text-indigo-600 dark:text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]',
    glowClass: 'neon-glow-indigo',
    iconColor: 'text-indigo-500',
    tag: 'CINEMA ARCHIVE',
  };
};

function FilmCard({ film, onToggleWatched, onRemove }: FilmCardProps) {
  const { id, title, year, genre, rating, watched } = film;
  const isRatingValid = rating >= 1 && rating <= 10;
  const theme = getGenreTheme(genre);

  return (
    <article
      className={`glass-card p-6 rounded-3xl relative overflow-hidden group border transition-all duration-500 ${
        watched
          ? 'neon-glow-green border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/[0.015] dark:bg-emerald-500/[0.01]'
          : `${theme.border} ${theme.glowClass}`
      }`}
    >
      {/* Background Holographic Lines Decorator */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-5 dark:opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="100" cy="0" r="80" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="0" r="60" strokeWidth="1.5" />
          <circle cx="100" cy="0" r="40" strokeWidth="0.5" strokeDasharray="8 8" />
        </svg>
      </div>

      <header className="flex items-start justify-between gap-3 mb-4.5">
        <div>
          {/* Tech Tag */}
          <span className="text-[9px] font-black tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
            {theme.tag}
          </span>
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h2>
        </div>

        {/* Watch Status Badge */}
        {watched ? (
          <span className="flex items-center bg-emerald-500/10 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 text-[10px] px-2.5 py-1.5 rounded-xl font-bold border border-emerald-500/20 dark:border-emerald-500/20 shrink-0 shadow-sm shadow-emerald-500/5 uppercase tracking-wider">
            <svg className="w-3.5 h-3.5 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            Zhlédnuto
          </span>
        ) : (
          <span className={`flex items-center text-[10px] px-2.5 py-1.5 rounded-xl font-bold border shrink-0 uppercase tracking-wider ${theme.badgeBg}`}>
            Sledovat
          </span>
        )}
      </header>

      {/* Grid Specs */}
      <div className="space-y-3.5 text-slate-600 dark:text-slate-400 text-sm mb-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">Rok vydání</span>
          </div>
          <span className="font-extrabold text-slate-800 dark:text-slate-200">{year}</span>
        </div>

        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
          <div className="flex items-center gap-2">
            <svg className={`w-4 h-4 ${theme.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">Žánr filmu</span>
          </div>
          <span className={`font-extrabold text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 ${theme.textGlow}`}>
            {genre}
          </span>
        </div>

        {/* Futuristic Equalizer Rating Meter */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
              <svg className="w-4 h-4 text-amber-500 fill-amber-500/20" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">Hodnocení komunity</span>
            </div>
            <span className={`font-black ${isRatingValid ? 'text-slate-800 dark:text-slate-200' : 'text-rose-500 animate-pulse'}`}>
              {isRatingValid ? `${rating} / 10` : 'Neplatná hodnota'}
            </span>
          </div>

          {isRatingValid ? (
            <div className="flex items-center gap-[3px] h-2.5 bg-slate-100 dark:bg-slate-900/60 p-0.5 rounded-md border border-slate-200/50 dark:border-slate-800/40">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-sm transition-all duration-500 ${
                    i < rating
                      ? watched
                        ? 'bg-emerald-500 shadow-[0_0_6px_#10b981]'
                        : 'bg-gradient-to-t from-indigo-500 to-cyan-400 dark:from-indigo-600 dark:to-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-300 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="h-2 bg-rose-500/20 dark:bg-rose-950/20 rounded-md border border-rose-500/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent w-full h-full animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>
          )}
        </div>
      </div>

      {/* Button Actions */}
      <div className="flex gap-2.5 relative z-10">
        <button
          type="button"
          onClick={() => onToggleWatched(id)}
          className={`flex-1 inline-flex items-center justify-center rounded-2xl px-3.5 py-3 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 ${
            watched
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 border border-emerald-500/20 focus:ring-emerald-500'
              : `bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 focus:ring-indigo-500`
          }`}
        >
          {watched ? (
            <>
              <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Sledovat znovu
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
              Označit zhlédnuté
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => onRemove(id)}
          className="inline-flex items-center justify-center bg-slate-100 hover:bg-rose-600 text-slate-600 hover:text-white dark:bg-slate-900/60 dark:text-slate-400 dark:hover:bg-rose-600/90 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-xs font-bold uppercase transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-rose-500 hover:shadow-lg hover:shadow-rose-500/20 hover:border-rose-500/40"
          title="Odebrat film"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default FilmCard;
