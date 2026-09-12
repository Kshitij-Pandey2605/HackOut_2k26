import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

export const MatchingEnginePage = () => {
  const [filterTech, setFilterTech] = useState('ALL');

  const matches = [
    {
      id: 1,
      supplier: 'SolvCarbon Pyrolysis Unit #2',
      buyer: 'Apex Logistics Global',
      score: 98.6,
      category: 'Biochar Permanent Removal',
      distance: '42 km (Zero Freight Penalty)',
      volume: '1,400 tCO2e / yr',
      price: '$135 / tonne',
      factors: ['Geographic proximity', 'Durability > 100 yrs', 'Immediate MRV feed'],
    },
    {
      id: 2,
      supplier: 'Nordic Direct Air Array',
      buyer: 'NordTech DataCenters',
      score: 94.2,
      category: 'Direct Air Capture (DAC)',
      distance: 'Co-located on Green Grid',
      volume: '800 tCO2e / yr',
      price: '$220 / tonne',
      factors: ['1000+ yr Geological Storage', 'Scope 2 Power Alignment'],
    },
    {
      id: 3,
      supplier: 'Kaveri Basin Agro-Waste Valorization',
      buyer: 'EcoPackaging Consortia',
      score: 91.8,
      category: 'Biomass Circular Feedstock',
      distance: '110 km corridor',
      volume: '3,200 tonnes circular biomass',
      price: '$68 / tonne',
      factors: ['Replaces virgin plastics', 'High moisture compatibility'],
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Autonomous Smart Matching Engine</h1>
            <Badge variant="cyan">AI Active</Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Graph neural engine matching industrial carbon streams with circular buyers based on chemical compatibility, logistics, and cost.
          </p>
        </div>
        <Button size="sm" className="gap-2">
          <Sparkles className="w-4 h-4" /> Run Real-Time Match
        </Button>
      </div>

      {/* Matches List */}
      <div className="space-y-4">
        {matches.map((item) => (
          <Card key={item.id} hover className="p-6 border-l-4 border-l-eco-emerald space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <Badge variant="emerald">{item.score}% Match Compatibility</Badge>
                  <span className="text-xs text-slate-400">{item.category}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                  {item.supplier} <span className="text-eco-emerald">⇄</span> {item.buyer}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white">{item.price}</span>
                <p className="text-xs text-slate-400">{item.volume}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {item.factors.map((factor, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-carbon-800/80 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-eco-emerald shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button variant="ghost" size="sm">Inspect Compatibility Graph</Button>
              <Button size="sm" className="gap-2">
                Initiate Smart Contract <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MatchingEnginePage;
