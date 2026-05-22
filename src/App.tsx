/* Stylingová metoda: Tailwind CSS */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import WatchlistPage from './pages/WatchlistPage';
import AddFilmPage from './pages/AddFilmPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 sm:p-8 font-sans transition-colors duration-500 relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigační lišta */}
        <nav className="flex flex-col sm:flex-row justify-between items-center bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl p-4 px-6 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-black/60 mb-10 border border-white/40 dark:border-white/5 gap-4">
          
          {/* Brand/Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-indigo-600 dark:from-cyan-400 dark:to-fuchsia-600 text-white rounded-xl shadow-md shadow-indigo-500/15">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-lg font-black tracking-wider bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
              FILMBOX
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 bg-slate-100/50 dark:bg-slate-950/40 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 dark:from-cyan-500/90 dark:to-indigo-600/90 text-white shadow-md shadow-indigo-500/20 scale-105'
                    : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-200/30 dark:hover:bg-slate-900/60'
                }`
              }
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Můj watchlist
            </NavLink>
            
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 dark:from-cyan-500/90 dark:to-indigo-600/90 text-white shadow-md shadow-indigo-500/20 scale-105'
                    : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-200/30 dark:hover:bg-slate-900/60'
                }`
              }
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Přidat film
            </NavLink>
          </div>

          {/* Theme switcher */}
          <button
            type="button"
            id="theme-toggle-btn"
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium rounded-2xl text-sm transition-all duration-300 cursor-pointer shadow-md hover:shadow-indigo-500/10 active:scale-95 outline-none focus:ring-2 focus:ring-indigo-500 shrink-0"
            aria-label="Přepnout motiv"
          >
            <svg className="w-5 h-5 block dark:hidden text-amber-500 fill-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <svg className="w-5 h-5 hidden dark:block text-cyan-400 fill-cyan-950/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </nav>

        {/* Obsah stránek */}
        <main>
          <Routes>
            <Route path="/" element={<WatchlistPage />} />
            <Route path="/form" element={<AddFilmPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
