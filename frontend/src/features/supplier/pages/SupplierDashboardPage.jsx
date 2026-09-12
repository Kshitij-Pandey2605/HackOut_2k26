import React from 'react';
import { MetricCard } from '@/components/common/MetricCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Leaf, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Plus, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const mockTelemetryData = [
  { month: 'Jan', sequestration: 120, revenue: 45000 },
  { month: 'Feb', sequestration: 190, revenue: 72000 },
  { month: 'Mar', sequestration: 280, revenue: 112000 },
  { month: 'Apr', sequestration: 350, revenue: 140000 },
  { month: 'May', sequestration: 420, revenue: 168000 },
  { month: 'Jun', sequestration: 560, revenue: 224000 },
];

export const SupplierDashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Supplier Trading Operations</h1>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Real-time feed from Biochar Pyrolysis Facility #04 & Direct Air Capture Array
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">Export MRV Data</Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" /> New Batch Listing
          </Button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Sequestered"
          value="1,920"
          unit="tCO2e"
          change="+18.4%"
          isPositive={true}
          icon={Leaf}
          subtitle="vs last cycle"
        />
        <MetricCard
          title="Verified Credits"
          value="1,450"
          unit="VCUs"
          change="+12.0%"
          isPositive={true}
          icon={ShieldCheck}
          subtitle="Gold Standard / Puro.earth"
        />
        <MetricCard
          title="Gross Revenue"
          value="$761,000"
          unit="USD"
          change="+24.8%"
          isPositive={true}
          icon={DollarSign}
          subtitle="Escrow cleared"
        />
        <MetricCard
          title="Market Clearance Rate"
          value="94.2%"
          unit="Yield"
          change="+3.1%"
          isPositive={true}
          icon={TrendingUp}
          subtitle="AI Spot match rate"
        />
      </div>

      {/* Chart Section */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Carbon Sequestration & Offtake Velocity</h3>
            <p className="text-xs text-slate-400">Monthly tCO2e removed vs realized USD revenue</p>
          </div>
          <Badge variant="emerald">Live Telemetry</Badge>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockTelemetryData}>
              <defs>
                <linearGradient id="colorSequestration" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#263238" opacity={0.3} />
              <XAxis dataKey="month" stroke="#90a4ae" fontSize={11} />
              <YAxis stroke="#90a4ae" fontSize={11} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f171a', 
                  borderColor: '#263238',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="sequestration" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorSequestration)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
export default SupplierDashboardPage;
