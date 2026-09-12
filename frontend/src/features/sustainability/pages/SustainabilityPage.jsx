import React from 'react';
import { Card } from '@/components/ui/Card';
import { MetricCard } from '@/components/common/MetricCard';
import { Badge } from '@/components/ui/Badge';
import { BarChart3, Globe, Award, TrendingDown } from 'lucide-react';

export const SustainabilityPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Sustainability & ESG Governance</h1>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          GHG Protocol Scope 1, Scope 2, and Scope 3 compliance reporting and Net-Zero progress tracking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Corporate ESG Score"
          value="92.4"
          unit="/ 100"
          change="+4.8 pts"
          isPositive={true}
          icon={Award}
          subtitle="Top decile in manufacturing"
        />
        <MetricCard
          title="Scope 1 Emissions"
          value="14,200"
          unit="tCO2e"
          change="-12%"
          isPositive={true}
          icon={TrendingDown}
          subtitle="On-site fuel switching"
        />
        <MetricCard
          title="Scope 2 Emissions"
          value="2,100"
          unit="tCO2e"
          change="-28%"
          isPositive={true}
          subtitle="100% PPA Green Power"
        />
        <MetricCard
          title="Scope 3 Inset Progress"
          value="68.5%"
          unit="Target"
          change="+8.5%"
          isPositive={true}
          icon={Globe}
          subtitle="Supply chain circularity"
        />
      </div>

      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">Net-Zero Transition Milestone Roadmap</h3>
        <div className="space-y-3">
          {[
            { year: '2026', milestone: '50% Absolute Scope 1 & 2 Reduction', status: 'On Track (102% execution)' },
            { year: '2028', milestone: 'Zero-Waste Industrial Biomass Diversion', status: 'Scheduled' },
            { year: '2030', milestone: 'Net-Zero SBTi Validated Milestone', status: 'Target Alignment' },
          ].map((m, i) => (
            <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-carbon-800 border border-slate-200 dark:border-carbon-700/60 text-xs">
              <div className="flex items-center gap-3">
                <Badge variant="emerald">{m.year}</Badge>
                <span className="font-semibold text-slate-900 dark:text-white">{m.milestone}</span>
              </div>
              <span className="text-eco-emerald font-semibold">{m.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default SustainabilityPage;
