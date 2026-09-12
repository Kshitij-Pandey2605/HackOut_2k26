import React from 'react';
import { Card } from '@/components/ui/Card';
import { MetricCard } from '@/components/common/MetricCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Users, Server, Database } from 'lucide-react';

export const AdminDashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Ecosystem Supervision</h1>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          Network governance, automated consensus monitoring, and participant verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Active Participants"
          value="342"
          unit="Enterprises"
          change="+14%"
          isPositive={true}
          icon={Users}
          subtitle="Suppliers & Buyers"
        />
        <MetricCard
          title="Consensus Health"
          value="99.98%"
          unit="Uptime"
          change="Optimal"
          isPositive={true}
          icon={Server}
          subtitle="dMRV telemetry cluster"
        />
        <MetricCard
          title="Total Escrow Value"
          value="$14.2M"
          unit="Locked"
          change="+28%"
          isPositive={true}
          subtitle="Smart contract collateral"
        />
        <MetricCard
          title="Pending Audits"
          value="6"
          unit="In Queue"
          icon={ShieldCheck}
          subtitle="MRV Certifications"
        />
      </div>

      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">Participant Verification Queue</h3>
        <div className="space-y-3">
          {[
            { org: 'Alpine DAC Alpha', type: 'Direct Air Capture Supplier', region: 'Switzerland', status: 'Pending Review' },
            { org: 'Pacific Green Offtake Fund', type: 'Institutional Buyer', region: 'Singapore', status: 'KYC Verified' },
            { org: 'Deccan Agro Soil Sequestration', type: 'Biochar Project', region: 'India', status: 'Sensor Calibrated' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-carbon-800 border border-slate-200 dark:border-carbon-700/60 text-xs">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{item.org}</p>
                <p className="text-slate-400">{item.type} • {item.region}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={item.status === 'KYC Verified' ? 'emerald' : 'amber'}>
                  {item.status}
                </Badge>
                <Button size="sm" variant="outline" className="text-xs">Approve</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default AdminDashboardPage;
