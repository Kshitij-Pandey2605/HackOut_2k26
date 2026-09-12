import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Layers,
  Recycle
} from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-8 text-center max-w-5xl mx-auto">
        <Badge variant="emerald" className="mb-6 px-4 py-1.5 text-xs">
          <Sparkles className="w-3.5 h-3.5 mr-1" />
          Autonomous AI-Powered Circular Carbon Economy
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Transform Industrial Waste Into High-Integrity{' '}
          <span className="bg-gradient-to-r from-eco-emerald to-eco-cyan bg-clip-text text-transparent">
            Carbon Value
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          CarbonSphere synchronizes carbon emitters, biochar producers, and corporate buyers via real-time 
          Digital Twin telemetry, autonomous AI opportunity matching, and verifiable MRV audit trails.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/role-selection">
            <Button size="lg" className="gap-2 text-base px-8 py-3.5">
              Enter Exchange <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="secondary" size="lg" className="text-base px-8 py-3.5">
              Explore Marketplace
            </Button>
          </Link>
        </div>
      </section>

      {/* 3 Core Architecture Pillars */}
      <section id="ecosystem" className="py-20 px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-carbon-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Circular Ecosystem Architecture</h2>
          <p className="text-sm text-slate-500 mt-2">Connecting physical carbon capture with financial liquidity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-eco-emerald/10 text-eco-emerald flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Carbon Flow Digital Twin</h3>
            <p className="text-xs text-slate-500 dark:text-carbon-300 leading-relaxed">
              Real-time telemetry and Sankey-based carbon balance tracking from source emitter to bio-sequestration site.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-eco-cyan/10 text-eco-cyan flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Opportunity Engine</h3>
            <p className="text-xs text-slate-500 dark:text-carbon-300 leading-relaxed">
              Algorithmic matching pairing industrial waste streams with optimal circular valorization partners in real-time.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Trust & MRV Verification</h3>
            <p className="text-xs text-slate-500 dark:text-carbon-300 leading-relaxed">
              Cryptographically verified audit trail guaranteeing zero double-counting across international carbon registries.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
