import { useMemo } from 'react';

/**
 * Custom hook to calculate avoided emissions, permanence factor, and carbon credit yields.
 */
export function useCarbonCalculator(biomassTonnes, carbonContentFraction = 0.75, permanenceFactor = 0.8) {
  return useMemo(() => {
    if (!biomassTonnes || isNaN(biomassTonnes)) {
      return { tCO2e: 0, creditsYield: 0, grossValueUSD: 0 };
    }

    // Standard IPCC C to CO2 stoichiometric multiplier: 44/12 ≈ 3.667
    const carbonMass = biomassTonnes * carbonContentFraction;
    const grossTCO2e = carbonMass * (44 / 12);
    const netCreditsYield = grossTCO2e * permanenceFactor;
    const estimatedValue = netCreditsYield * 140; // baseline $140/t

    return {
      tCO2e: Number(grossTCO2e.toFixed(2)),
      creditsYield: Number(netCreditsYield.toFixed(2)),
      grossValueUSD: Number(estimatedValue.toFixed(2)),
    };
  }, [biomassTonnes, carbonContentFraction, permanenceFactor]);
}
