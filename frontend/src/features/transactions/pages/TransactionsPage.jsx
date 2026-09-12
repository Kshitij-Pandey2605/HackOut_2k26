import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowDownLeft, ArrowUpRight, Download, Filter } from 'lucide-react';

export const TransactionsPage = () => {
  const transactions = [
    {
      id: 'TX-90214',
      date: '2026-09-11',
      description: 'Biochar Batch #4 Escrow Settlement',
      counterparty: 'Apex Logistics Corp',
      volume: '1,200 tCO2e',
      amount: '+$174,000.00',
      type: 'INCOMING',
      status: 'Settled',
    },
    {
      id: 'TX-90180',
      date: '2026-09-07',
      description: 'Platform MRV Verification Fee',
      counterparty: 'DNV Verification Body',
      volume: '—',
      amount: '-$2,500.00',
      type: 'OUTGOING',
      status: 'Completed',
    },
    {
      id: 'TX-89912',
      date: '2026-09-02',
      description: 'Direct Air Forward Offtake Deposit',
      counterparty: 'NordTech DataCenters',
      volume: '450 tCO2e',
      amount: '+$94,500.00',
      type: 'INCOMING',
      status: 'Escrow Locked',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Transactions & Escrow Ledger</h1>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Real-time settlement ledger with smart-contract escrow safety mechanisms.
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" /> Download Statement
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-carbon-800/80 text-slate-500 border-b border-slate-200 dark:border-carbon-700/60 uppercase font-semibold">
            <tr>
              <th className="p-4">Tx ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Description</th>
              <th className="p-4">Counterparty</th>
              <th className="p-4">Volume</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-carbon-800">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50/50 dark:hover:bg-carbon-800/40">
                <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">{tx.id}</td>
                <td className="p-4 text-slate-400">{tx.date}</td>
                <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{tx.description}</td>
                <td className="p-4 text-slate-400">{tx.counterparty}</td>
                <td className="p-4 font-medium">{tx.volume}</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">{tx.amount}</td>
                <td className="p-4">
                  <Badge variant={tx.status === 'Settled' ? 'emerald' : tx.status === 'Completed' ? 'cyan' : 'amber'}>
                    {tx.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
export default TransactionsPage;
