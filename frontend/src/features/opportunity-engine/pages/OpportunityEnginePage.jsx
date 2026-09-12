import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

export const OpportunityEnginePage = () => {
  const opportunities = [
    {
      title: 'Unclaimed Agricultural Waste Biomass (Punjab Agro Belt)',
      potential: '+$185,000 / Season',
      action: 'Deploy Mobile Pyrolysis Kiln',
      carbonYield: '2,800 tCO2e',
      urgency: 'High (Harvest cycle ending in 14 days)',
      badge: 'Arbitrage Alert',
    },
    {
      title: 'Flue Gas CO2 Waste Stream (Industrial Cement Cluster)',
      potential: '+$340,000 / yr',
      action: 'Micro-algae photobioreactor mineral binding',
      carbonYield: '4,500 tCO2e',
      urgency: 'Medium',
      badge: 'Circularity Opportunity',
    },
    {
      title: 'Puro.earth Biochar Price Spike in European Compliance Market',
      potential: '+$42 / t premium',
      action: 'Reroute Spot Batches to EU Offtake',
      carbonYield: '1,200 tCO2e',
      urgency: 'Immediate',
      badge: 'Price Arbitrage',
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Carbon Opportunity Engine</h1>
            <Badge variant="amber">Predictive Insights</Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Predictive AI scanning regional supply chains, waste outputs, and market price differentials to maximize carbon valorization.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {opportunities.map((opp, index) => (
          <Card key={index} hover className="flex flex-col justify-between space-y-4 border-t-4 border-t-accent-amber">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="amber">{opp.badge}</Badge>
                <span className="text-[11px] text-rose-500 font-semibold">{opp.urgency}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {opp.title}
              </h3>
              <div className="p-3 bg-slate-50 dark:bg-carbon-800 rounded-xl space-y-1">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">Estimated Revenue Uplift</p>
                <p className="text-lg font-black text-eco-emerald">{opp.potential}</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-carbon-300">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Recommended Action:</span> {opp.action}
              </p>
            </div>

            <Button size="sm" className="w-full gap-2 mt-4">
              Execute Opportunity <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default OpportunityEnginePage;
