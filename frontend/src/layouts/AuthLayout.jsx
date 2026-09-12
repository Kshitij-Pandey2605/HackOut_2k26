import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-carbon-950 p-4 relative overflow-hidden">
      {/* Background eco decorative orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-eco-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-eco-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-eco-forest to-eco-emerald flex items-center justify-center text-white shadow-glow-emerald">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">CarbonSphere</span>
          </Link>
          <p className="text-xs text-slate-500 dark:text-carbon-300">
            Decentralized Autonomous Carbon Circular Economy
          </p>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 rounded-3xl p-8 shadow-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
