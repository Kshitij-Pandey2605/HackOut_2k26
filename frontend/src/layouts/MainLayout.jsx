import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-carbon-950 flex flex-col">
      {/* Public Navigation */}
      <header className="h-20 border-b border-slate-200 dark:border-carbon-800 backdrop-blur-lg bg-white/70 dark:bg-carbon-950/70 sticky top-0 z-30 px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-eco-forest to-eco-emerald flex items-center justify-center text-white shadow-glow-emerald">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-slate-900 dark:text-white">CarbonSphere</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#ecosystem" className="hover:text-eco-emerald transition-colors">Ecosystem</a>
          <a href="#digital-twin" className="hover:text-eco-emerald transition-colors">Digital Twin</a>
          <a href="#marketplace" className="hover:text-eco-emerald transition-colors">Marketplace</a>
          <a href="#verification" className="hover:text-eco-emerald transition-colors">MRV Verification</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/role-selection">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Public Footer */}
      <footer className="border-t border-slate-200 dark:border-carbon-800 py-12 px-8 text-center text-xs text-slate-500 dark:text-carbon-400">
        <p>© 2026 CarbonSphere Ecosystem. All Rights Reserved. Built for high-integrity circular carbon exchange.</p>
      </footer>
    </div>
  );
};
