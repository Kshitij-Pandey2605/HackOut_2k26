import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';

export const SettingsPage = () => {
  const { user, role } = useAuth();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Enterprise Profile & Settings</h1>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          Manage corporate credentials, API keys, MRV registry credentials, and notifications.
        </p>
      </div>

      <Card className="space-y-6">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">Organization Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Enterprise Legal Name" defaultValue={user?.name || 'CarbonSphere Member Org'} />
          <Input label="Contact Email" defaultValue={user?.email || 'contact@enterprise.com'} />
          <Input label="Assigned Role" defaultValue={role || 'Supplier'} disabled />
          <Input label="Registry Account ID" defaultValue="REG-CS-88319" />
        </div>
        <div className="flex justify-end">
          <Button size="sm">Save Changes</Button>
        </div>
      </Card>

      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">Telemetry & IoT API Keys</h3>
        <p className="text-xs text-slate-400">
          Use these secret keys to stream continuous sensor and mass-balance data to the Carbon Flow Digital Twin.
        </p>
        <div className="flex items-center gap-3">
          <Input defaultValue="cs_live_sec_994b29f0e1a84218" type="password" disabled className="font-mono text-xs" />
          <Button variant="outline" size="sm">Rotate Key</Button>
        </div>
      </Card>
    </div>
  );
};
export default SettingsPage;
