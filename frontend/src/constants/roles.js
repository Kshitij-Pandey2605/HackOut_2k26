export const USER_ROLES = {
  SUPPLIER: 'SUPPLIER', // Carbon emitter / Biochar / CCUS project developer
  BUYER: 'BUYER',       // Corporate seeking offsets, circular feedstock
  VERIFIER: 'VERIFIER', // Third-party audit / MRV agent
  ADMIN: 'ADMIN',       // Platform overseer
};

export const ROLE_LABELS = {
  [USER_ROLES.SUPPLIER]: 'Carbon Supplier / Project Developer',
  [USER_ROLES.BUYER]: 'Carbon Buyer / Corporate Offtaker',
  [USER_ROLES.VERIFIER]: 'MRV Auditor / Verifier',
  [USER_ROLES.ADMIN]: 'Platform Administrator',
};
