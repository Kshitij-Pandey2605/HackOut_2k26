/**
 * Financial and Carbon metric formatters
 */

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatCarbonTonnes = (tonnes) => {
  return `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(tonnes)} tCO2e`;
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const truncateHash = (hash, start = 6, end = 4) => {
  if (!hash) return '';
  return `${hash.slice(0, start)}...${hash.slice(-end)}`;
};
