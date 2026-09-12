import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Leaf } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-carbon-950 px-6 text-center">
      <div className="w-16 h-16 rounded-3xl bg-eco-emerald/10 text-eco-emerald flex items-center justify-center mb-6">
        <Leaf className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-black text-slate-900 dark:text-white">404</h1>
      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 mt-2">Telemetry Node Not Found</h2>
      <p className="text-xs text-slate-500 max-w-sm mt-2">
        The carbon registry block or route you requested does not exist or has been archived.
      </p>
      <Link to="/" className="mt-6">
        <Button size="sm">Return to Command Center</Button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
