import React from 'react';
import { MetricCard } from '@/components/common/MetricCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Target, TrendingDown, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BuyerDashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Corporate Offtake & Insetting Desk</h1>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Scope 1, 2, and 3 Net-Zero Insetting Portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/marketplace">
            <Button size="sm" className="gap-2">
              <ShoppingBag className="w-4 h-4" /> Browse Verified Credits
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Offtake Secured"
          value="4,250"
          unit="tCO2e"
          change="+32%"
          isPositive={true}
          icon={Target}
          subtitle="Annual compliance quota: 85%"
        />
        <MetricCard
          title="Emissions Inset"
          value="-22.5%"
          unit="Scope 1 & 2"
          change="-4.2%"
          isPositive={true}
          icon={TrendingDown}
          subtitle="YoY carbon footprint drop"
        />
        <MetricCard
          title="Average Cost / Tonne"
          value="$138.50"
          unit="USD"
          change="-6.4%"
          isPositive={true}
          subtitle="AI Arbitrage savings"
        />
        <MetricCard
          title="Audit Compliance"
          value="100%"
          unit="Verified"
          icon={ShieldCheck}
          subtitle="Zero double-count guarantee"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Active Forward Contracts & Offtake</h3>
            <Badge variant="cyan">3 Active Contracts</Badge>
          </div>
          <div className="space-y-3">
            {[
              { project: 'Nordic Biochar Pyrolysis Facility', tonnes: '1,200 tCO2e', status: 'Delivered', price: '$142/t' },
              { project: 'Iceland Direct Air Mineralization', tonnes: '850 tCO2e', status: 'Pending MRV', price: '$210/t' },
              { project: 'Indo-Gangetic Agroforestry Project', tonnes: '2,200 tCO2e', status: 'In Escrow', price: '$85/t' },
            ].map((contract, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-carbon-800/60 border border-slate-200 dark:border-carbon-700/50 text-xs">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{contract.project}</p>
                  <p className="text-slate-400">{contract.tonnes} • {contract.price}</p>
                </div>
                <Badge variant={contract.status === 'Delivered' ? 'emerald' : 'amber'}>
                  {contract.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI Smart Match Recommendations</h3>
            <Badge variant="emerald">Live Match Engine</Badge>
          </div>
          <p className="text-xs text-slate-400">
            Based on your Scope 3 profile, the algorithm discovered 2 biochar suppliers matching your exact geographic corridor.
          </p>
          <div className="p-4 rounded-xl bg-eco-emerald/5 border border-eco-emerald/20 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-eco-emerald">High Compatibility Match (98.4%)</p>
              <p className="text-xs text-slate-300 mt-0.5">Biochar Agritech Ltd • 1,500 tCO2e available</p>
            </div>
            <Link to="/matching-engine">
              <Button size="sm" variant="outline">View Match</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default BuyerDashboardPage;
