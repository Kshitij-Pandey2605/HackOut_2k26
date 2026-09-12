export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME: '/auth/me',
  },
  SUPPLIER: {
    DASHBOARD: '/supplier/dashboard',
    LISTINGS: '/supplier/listings',
    PROFILE: '/supplier/profile',
    ANALYTICS: '/supplier/analytics',
  },
  BUYER: {
    DASHBOARD: '/buyer/dashboard',
    REQUESTS: '/buyer/requests',
    ANALYTICS: '/buyer/analytics',
  },
  MARKETPLACE: {
    LISTINGS: '/marketplace/listings',
    ITEM: (id) => `/marketplace/listings/${id}`,
    CREATE_ORDER: '/marketplace/orders',
  },
  MATCHING: {
    RECOMMENDED: '/matching/recommendations',
    COMPUTE: '/matching/compute',
  },
  OPPORTUNITY: {
    FEED: '/opportunities/feed',
    FORECASTS: '/opportunities/forecasts',
  },
  DIGITAL_TWIN: {
    TELEMETRY: (facilityId) => `/digital-twin/${facilityId}/telemetry`,
    FLOWS: '/digital-twin/flows',
  },
  SUSTAINABILITY: {
    OVERVIEW: '/sustainability/overview',
    ESG_SCORE: '/sustainability/esg-score',
  },
  TRUST: {
    VERIFY_CERTIFICATE: '/trust/verify',
    AUDIT_TRAIL: (id) => `/trust/audit-trail/${id}`,
  },
  TRANSACTIONS: {
    LIST: '/transactions',
    DETAIL: (id) => `/transactions/${id}`,
  },
  NOTIFICATIONS: {
    LIST: '/notifications',
    MARK_READ: (id) => `/notifications/${id}/read`,
  },
  ADMIN: {
    USERS: '/admin/users',
    STATS: '/admin/stats',
  }
};
