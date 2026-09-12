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
  Activity, 
  Zap, 
  Flame, 
  Gauge, 
  Wifi, 
  WifiOff, 
  Sparkles 
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
import { useSocket } from '@/context/SocketContext';

const mockTelemetryData = [
  { month: 'Jan', sequestration: 120, revenue: 45000 },
  { month: 'Feb', sequestration: 190, revenue: 72000 },
  { month: 'Mar', sequestration: 280, revenue: 112000 },
  { month: 'Apr', sequestration: 350, revenue: 140000 },
  { month: 'May', sequestration: 420, revenue: 168000 },
  { month: 'Jun', sequestration: 560, revenue: 224000 },
];

export const SupplierDashboardPage = () => {
  const { isConnected, telemetry, simulateSpike } = useSocket();

  return (
    <div className="space-y-6">
      {/* Top Banner with Real-Time Socket Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-black tracking-tight text-white">Supplier Command Center</h1>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
              isConnected 
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400' 
                : 'bg-amber-950/80 border-amber-500/50 text-amber-400'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
              <span>{isConnected ? 'LIVE WEBSOCKET STREAM' : 'CONNECTING...'}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Real-time IoT telemetry from <span className="text-emerald-400 font-semibold">{telemetry?.facilityName || 'Apex Point-Source Capture Array'}</span> ({telemetry?.facilityId || 'FAC-DAC-0941'})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            type="button"
            onClick={simulateSpike} 
            variant="outline" 
            size="sm" 
            className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/50 text-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulate Live Spike</span>
          </Button>
          <Button size="sm" className="bg-[#0e6245] hover:bg-[#0b5038] text-white gap-2 text-xs">
            <Plus className="w-4 h-4" /> New Batch Listing
          </Button>
        </div>
      </div>

      {/* Real-time Dynamic IoT Sensor Telemetry Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>CO₂ Capture Rate</span>
            <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          </div>
          <div className="text-lg font-black text-slate-900 dark:text-white flex items-baseline gap-1">
            <span>{telemetry?.co2CaptureRate || 48.6}</span>
            <span className="text-[10px] font-semibold text-slate-400">kg/hr</span>
          </div>
          <div className="text-[9px] text-emerald-600 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Telemetry active</span>
          </div>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>Gas Purity</span>
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
          </div>
          <div className="text-lg font-black text-slate-900 dark:text-white flex items-baseline gap-1">
            <span>{telemetry?.purity || 99.72}</span>
            <span className="text-[10px] font-semibold text-slate-400">%</span>
          </div>
          <div className="text-[9px] text-cyan-600 font-medium">Beverage / Food Grade</div>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>Flue Temp</span>
            <Flame className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-lg font-black text-slate-900 dark:text-white flex items-baseline gap-1">
            <span>{telemetry?.temperature || 64.2}</span>
            <span className="text-[10px] font-semibold text-slate-400">°C</span>
          </div>
          <div className="text-[9px] text-slate-400 font-medium">Optimal thermal zone</div>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>Line Pressure</span>
            <Gauge className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div className="text-lg font-black text-slate-900 dark:text-white flex items-baseline gap-1">
            <span>{telemetry?.pressure || 3.42}</span>
            <span className="text-[10px] font-semibold text-slate-400">bar</span>
          </div>
          <div className="text-[9px] text-slate-400 font-medium">Nominal pipeline feed</div>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>Power Load</span>
            <Zap className="w-3.5 h-3.5 text-yellow-500" />
          </div>
          <div className="text-lg font-black text-slate-900 dark:text-white flex items-baseline gap-1">
            <span>{telemetry?.energyConsumption || 142.8}</span>
            <span className="text-[10px] font-semibold text-slate-400">kWh</span>
          </div>
          <div className="text-[9px] text-emerald-600 font-medium">100% Renewable grid</div>
        </div>

        <div className="bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 p-3.5 rounded-2xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider">
            <span>Captured Today</span>
            <Leaf className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-lg font-black text-emerald-700 dark:text-emerald-400 flex items-baseline gap-1">
            <span>{telemetry?.totalCapturedToday || 1.18}</span>
            <span className="text-[10px] font-semibold text-slate-400">Tons</span>
          </div>
          <div className="text-[9px] text-slate-400 font-medium">Real-time accumulation</div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Sequestered"
          value={telemetry?.cumulativeCredits ? `${(telemetry.cumulativeCredits * 0.5).toFixed(0)}` : '1,920'}
          unit="tCO2e"
          change="+18.4%"
          isPositive={true}
          icon={Leaf}
          subtitle="Live telemetry verified"
        />
        <MetricCard
          title="Verified Credits"
          value={telemetry?.cumulativeCredits ? `${telemetry.cumulativeCredits}` : '3,840'}
          unit="VCUs"
          change="+12.0%"
          isPositive={true}
          icon={ShieldCheck}
          subtitle="Gold Standard / Puro.earth"
        />
        <MetricCard
          title="Realized Revenue"
          value={telemetry?.estimatedRevenue ? `$${telemetry.estimatedRevenue.toLocaleString()}` : '$192,000'}
          unit="USD"
          change="+24.8%"
          isPositive={true}
          icon={DollarSign}
          subtitle="Escrow smart contracts"
        />
        <MetricCard
          title="Market Clearance Rate"
          value={`${telemetry?.captureEfficiency || 96.4}%`}
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
          <Badge variant="emerald" className="animate-pulse">Live Socket Synced</Badge>
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
