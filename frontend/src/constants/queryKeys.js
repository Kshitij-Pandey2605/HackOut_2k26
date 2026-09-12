/**
 * Standardized TanStack Query Keys for cache invalidation & optimistic updates
 */
export const QUERY_KEYS = {
  AUTH: {
    USER: ['auth', 'user'],
    SESSION: ['auth', 'session'],
  },
  SUPPLIER: {
    DASHBOARD: ['supplier', 'dashboard'],
    LISTINGS: (filters) => ['supplier', 'listings', filters],
    PROFILE: (id) => ['supplier', 'profile', id],
    ANALYTICS: (period) => ['supplier', 'analytics', period],
  },
  BUYER: {
    DASHBOARD: ['buyer', 'dashboard'],
    REQUESTS: ['buyer', 'requests'],
    ANALYTICS: ['buyer', 'analytics'],
  },
  MARKETPLACE: {
    LISTINGS: (params) => ['marketplace', 'listings', params],
    ITEM: (id) => ['marketplace', 'item', id],
    ORDER_BOOK: (id) => ['marketplace', 'orderBook', id],
  },
  MATCHING_ENGINE: {
    RECOMMENDATIONS: (role, criteria) => ['matching', 'recommendations', role, criteria],
    COMPATIBILITY: (idA, idB) => ['matching', 'compatibility', idA, idB],
  },
  OPPORTUNITY_ENGINE: {
    FEED: ['opportunities', 'feed'],
    RADAR: ['opportunities', 'radar'],
    PREDICTIONS: ['opportunities', 'predictions'],
  },
  DIGITAL_TWIN: {
    TELEMETRY: (facilityId) => ['digitalTwin', 'telemetry', facilityId],
    FLOW_GRAPH: (nodeId) => ['digitalTwin', 'flowGraph', nodeId],
  },
  SUSTAINABILITY: {
    ESG_METRICS: ['sustainability', 'esg'],
    SCOPE_EMISSIONS: ['sustainability', 'scopeEmissions'],
  },
  TRUST_VERIFICATION: {
    AUDIT_TRAIL: (batchId) => ['verification', 'auditTrail', batchId],
    CERTIFICATES: ['verification', 'certificates'],
  },
  TRANSACTIONS: {
    LIST: (filters) => ['transactions', 'list', filters],
    DETAIL: (txId) => ['transactions', 'detail', txId],
  },
  NOTIFICATIONS: {
    UNREAD: ['notifications', 'unread'],
    ALL: ['notifications', 'all'],
  },
  ADMIN: {
    USERS: ['admin', 'users'],
    AUDIT_LOGS: ['admin', 'auditLogs'],
    SYSTEM_STATS: ['admin', 'stats'],
  }
};
