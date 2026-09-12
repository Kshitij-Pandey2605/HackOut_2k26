import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, FileCheck, CheckCircle, ExternalLink } from 'lucide-react';

export const TrustVerificationPage = () => {
  const audits = [
    {
      id: 'AUD-9921-MRV',
      project: 'TerraChar Biochar Sequestration Batch #4',
      registry: 'Puro.earth CORC',
      auditor: 'DNV GL Verification Services',
      timestamp: '2026-09-10 14:32 UTC',
      hash: '0x8f2e9a...b4317c',
      status: 'VERIFIED & IMMUTABLE',
    },
    {
      id: 'AUD-8834-DAC',
      project: 'Iceland Direct Air Capture Sequestration',
      registry: 'Gold Standard Registry',
      auditor: 'TÜV SÜD Carbon Services',
      timestamp: '2026-09-08 09:15 UTC',
      hash: '0x4c11b0...ee924a',
      status: 'VERIFIED & IMMUTABLE',
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Trust & Verification Center</h1>
            <Badge variant="emerald">MRV Certified</Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Independent Measurement, Reporting, and Verification (dMRV) records backed by cryptographic audit proofs.
          </p>
        </div>
        <Button size="sm" variant="outline" className="gap-2">
          <FileCheck className="w-4 h-4" /> Verify Batch Hash
        </Button>
      </div>

      <div className="space-y-4">
        {audits.map((item) => (
          <Card key={item.id} className="p-6 space-y-4 border-l-4 border-l-eco-emerald">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-eco-emerald">{item.id}</span>
                  <Badge variant="emerald">{item.registry}</Badge>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{item.project}</h3>
              </div>
              <Badge variant="emerald" className="self-start md:self-auto">
                <CheckCircle className="w-3 h-3 mr-1" /> {item.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-slate-50 dark:bg-carbon-800 rounded-xl text-xs">
              <div>
                <span className="text-slate-400">Auditor:</span>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{item.auditor}</p>
              </div>
              <div>
                <span className="text-slate-400">Timestamp:</span>
                <p className="font-mono text-slate-800 dark:text-slate-200">{item.timestamp}</p>
              </div>
              <div>
                <span className="text-slate-400">Cryptographic Hash:</span>
                <p className="font-mono text-eco-cyan truncate">{item.hash}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button size="sm" variant="ghost" className="gap-1 text-xs">
                View Raw Sensor Data <ExternalLink className="w-3.5 h-3.5" />
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                Download Signed Certificate
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TrustVerificationPage;
