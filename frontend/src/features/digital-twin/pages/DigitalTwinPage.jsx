import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Activity, Radio, Cpu, RefreshCw, Layers, ArrowRight } from 'lucide-react';

export const DigitalTwinPage = () => {
  const nodes = [
    {
      id: 'NODE-01',
      name: 'Emission Capture Point',
      facility: 'Thermal Kiln Facility Alpha',
      sensorStatus: 'Active (MQTT 100ms)',
      flowRate: '14.2 kg/s CO2',
      purity: '98.2%',
      stage: 'CAPTURE',
    },
    {
      id: 'NODE-02',
      name: 'Pyrolysis Sequestration Array',
      facility: 'SolvChar Reactor 3',
      sensorStatus: 'Optimal (750°C Kiln)',
      flowRate: '12.8 kg/s Biochar conversion',
      purity: '84% Fixed Carbon',
      stage: 'SEQUESTRATION',
    },
    {
      id: 'NODE-03',
      name: 'Soil Insetting & Agronomic Sink',
      facility: 'Arable Soil Parcel #88',
      sensorStatus: 'Soil Probes Online',
      flowRate: 'Permanently Bound',
      purity: '0.00% Leaching',
      stage: 'VERIFIED SINK',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Carbon Flow Digital Twin</h1>
            <Badge variant="cyan">
              <Radio className="w-3 h-3 mr-1 animate-pulse" /> Live Telemetry
            </Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Real-time physical mass balance accounting from carbon emitter through reactor transformation to geological/soil sink.
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="w-3.5 h-3.5" /> Sync Telemetry
        </Button>
      </div>

      {/* Visualizer Flow Pipeline */}
      <Card className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Real-Time Mass-Balance Pipeline</h3>
          <span className="text-xs text-eco-emerald font-mono">Consensus: 100% Conserved</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {nodes.map((node, i) => (
            <div key={node.id} className="relative">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-carbon-800/80 border border-slate-200 dark:border-carbon-700 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="emerald">{node.stage}</Badge>
                  <span className="text-[10px] font-mono text-slate-400">{node.id}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{node.name}</h4>
                  <p className="text-xs text-slate-400">{node.facility}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-carbon-700/50 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sensor Status:</span>
                    <span className="text-eco-emerald font-mono">{node.sensorStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Throughput:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{node.flowRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Purity / Fixation:</span>
                    <span className="text-eco-cyan font-bold">{node.purity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default DigitalTwinPage;
