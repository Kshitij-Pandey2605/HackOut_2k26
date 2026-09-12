import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Bell, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';

export const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'AI Smart Match Found (98.6% Compatibility)',
      description: 'SolvCarbon Pyrolysis Unit matched your Scope 3 circular feedstock specifications.',
      time: '12 minutes ago',
      type: 'MATCH',
      read: false,
    },
    {
      id: 2,
      title: 'Digital Twin Sensor Anomaly Solved',
      description: 'Temperature variance at Kiln #3 returned to steady state (750°C). Telemetry normalized.',
      time: '2 hours ago',
      type: 'TELEMETRY',
      read: false,
    },
    {
      id: 3,
      title: 'Escrow Funds Disbursed ($174,000)',
      description: 'DNV GL verification audit completed successfully. Funds transferred to primary treasury.',
      time: 'Yesterday',
      type: 'ESCROW',
      read: true,
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Notification Feed</h1>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Real-time ecosystem alerts, matching notifications, and telemetry warnings.
          </p>
        </div>
        <Button variant="ghost" size="sm">Mark all as read</Button>
      </div>

      <div className="space-y-3">
        {notifications.map((item) => (
          <Card key={item.id} className={`p-4 flex items-start gap-4 ${!item.read ? 'border-l-4 border-l-eco-emerald' : ''}`}>
            <div className="w-9 h-9 rounded-xl bg-eco-emerald/10 text-eco-emerald flex items-center justify-center shrink-0 mt-0.5">
              <Bell className="w-4 h-4" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-carbon-300">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NotificationsPage;
