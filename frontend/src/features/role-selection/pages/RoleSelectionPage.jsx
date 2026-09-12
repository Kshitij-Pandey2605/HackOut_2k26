import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { USER_ROLES } from '@/constants/roles';
import { Card } from '@/components/ui/Card';
import { Factory, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

export const RoleSelectionPage = () => {
  const { selectRole } = useAuth();
  const navigate = useNavigate();

  const handleSelectRole = (roleKey, targetRoute) => {
    selectRole(roleKey);
    navigate(targetRoute);
  };

  const roles = [
    {
      id: USER_ROLES.SUPPLIER,
      title: 'Carbon Supplier / Producer',
      badge: 'Capture & Sequestration',
      description: 'Industrial emitters, biochar producers, DAC facilities, and agro-forestry carbon projects seeking to list & monetize verified credits.',
      icon: Factory,
      route: '/supplier/onboarding',
      color: 'border-eco-emerald hover:border-eco-emerald',
    },
    {
      id: USER_ROLES.BUYER,
      title: 'Corporate Carbon Buyer',
      badge: 'Offtake & Scope 1-3 Insetting',
      description: 'Corporations, funds, and sustainability leaders sourcing high-durability carbon removal and circular bio-feedstock.',
      icon: ShoppingBag,
      route: '/buyer/dashboard',
      color: 'border-eco-cyan hover:border-eco-cyan',
    },
    {
      id: USER_ROLES.ADMIN,
      title: 'Auditor / Ecosystem Admin',
      badge: 'MRV & Governance',
      description: 'Registry supervisors and verification bodies validating telemetry, sensor streams, and escrow disbursements.',
      icon: ShieldCheck,
      route: '/admin/dashboard',
      color: 'border-amber-500 hover:border-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-carbon-950 py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Select Your CarbonSphere Role</h1>
        <p className="text-sm text-slate-500 dark:text-carbon-300 max-w-xl mx-auto">
          Choose how your organization participates in the circular exchange. You can manage multiple roles under one enterprise umbrella later.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {roles.map((r) => {
          const Icon = r.icon;
          return (
            <Card
              key={r.id}
              hover
              onClick={() => handleSelectRole(r.id, r.route)}
              className="flex flex-col justify-between p-8 border-2 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-carbon-800 flex items-center justify-center text-eco-emerald group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-eco-emerald">{r.badge}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{r.title}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-carbon-300 leading-relaxed">
                  {r.description}
                </p>
              </div>

              <div className="pt-6 flex items-center text-xs font-semibold text-eco-emerald group-hover:translate-x-1 transition-transform">
                <span>Enter as {r.id}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default RoleSelectionPage;
