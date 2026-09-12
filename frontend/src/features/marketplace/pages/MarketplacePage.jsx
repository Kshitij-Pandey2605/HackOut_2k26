import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { ShieldCheck, Search, Filter, ShoppingCart, SlidersHorizontal } from 'lucide-react';

const mockListings = [
  {
    id: 'CS-BC-904',
    title: 'High-Purity Hardwood Biochar Carbon Removal',
    supplier: 'TerraChar Sequestration Facilities',
    method: 'Biomass Carbon Removal and Storage (BiCRS)',
    durability: '500+ Years',
    pricePerTonne: 145,
    availableTonnes: 1200,
    mrvStandard: 'Puro.earth CORC',
    vintage: '2025/2026',
    rating: 'AAA',
  },
  {
    id: 'CS-DAC-102',
    title: 'Geological Basalt Mineralization DAC',
    supplier: 'GeoCapture Nordics',
    method: 'Direct Air Capture + Mineralization',
    durability: '10,000+ Years',
    pricePerTonne: 290,
    availableTonnes: 450,
    mrvStandard: 'Gold Standard / Verra',
    vintage: '2026',
    rating: 'AAA+',
  },
  {
    id: 'CS-MIN-301',
    title: 'Enhanced Rock Weathering (Basalt Agricultural Soil)',
    supplier: 'Silicate Horizon Ventures',
    method: 'Enhanced Rock Weathering (ERW)',
    durability: '1,000+ Years',
    pricePerTonne: 95,
    availableTonnes: 3500,
    mrvStandard: 'Isometric Certified',
    vintage: '2025',
    rating: 'AA',
  },
];

export const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Carbon Marketplace</h1>
          <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
            Institutional spot & forward order book for verified high-durability carbon credits.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="gap-2">
            <SlidersHorizontal className="w-4 h-4" /> Filter by MRV Standard
          </Button>
        </div>
      </div>

      {/* Search & Quick Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by CDR method, standard (Puro, Verra, Isometric), or project id..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 rounded-xl text-xs outline-none focus:ring-2 focus:ring-eco-emerald"
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockListings.map((listing) => (
          <Card key={listing.id} hover className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="emerald">{listing.mrvStandard}</Badge>
                <span className="text-[11px] font-mono text-slate-400">ID: {listing.id}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                {listing.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-carbon-300">
                Supplier: <span className="font-semibold text-slate-700 dark:text-slate-200">{listing.supplier}</span>
              </p>

              <div className="p-3 bg-slate-50 dark:bg-carbon-800/80 rounded-xl space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Durability</span>
                  <span className="font-semibold text-eco-emerald">{listing.durability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Available Tonnes</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{listing.availableTonnes.toLocaleString()} tCO2e</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vintage</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{listing.vintage}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-carbon-800 flex items-center justify-between">
              <div>
                <span className="text-xl font-black text-slate-900 dark:text-white">${listing.pricePerTonne}</span>
                <span className="text-xs text-slate-400"> / tCO2e</span>
              </div>
              <Button size="sm" className="gap-2">
                <ShoppingCart className="w-3.5 h-3.5" /> Buy Credit
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MarketplacePage;
