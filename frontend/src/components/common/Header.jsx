import React from 'react';
import { Sun, Moon, Bell, Search } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white dark:bg-carbon-900 border-b border-slate-200 dark:border-carbon-800 px-6 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md bg-white/80 dark:bg-carbon-900/80">
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-carbon-800 px-3.5 py-1.5 rounded-xl w-72 md:w-96 text-sm text-slate-500">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search listings, carbon offsets, or telemetry..."
          className="bg-transparent border-none outline-none w-full text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-xs"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-carbon-800 transition-colors"
          title="Toggle Dark/Light"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Notifications */}
        <Link
          to="/notifications"
          className="p-2 relative rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-carbon-800 transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-eco-emerald rounded-full"></span>
        </Link>
      </div>
    </header>
  );
};
