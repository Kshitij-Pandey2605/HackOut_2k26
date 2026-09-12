# CarbonSphere — Frontend Architecture & Engineering Specification
**AI-Powered Circular Carbon Exchange Ecosystem**

---

## 1. Executive Architectural Overview

CarbonSphere is an enterprise-grade platform connecting carbon emitters, biochar/DAC project developers, and corporate offtakers through real-time telemetry (Digital Twin), AI-driven circular stream matching, and verifiable MRV audit trails.

This frontend is architected to balance **rapid Hackathon MVP velocity** with **production-grade enterprise scalability**. It uses a **Domain-Driven Feature-Sliced Architecture** where modules are isolated, testable, and independently scaleable.

### Core Technology Stack
- **Framework:** React.js 19 (Vite 8)
- **Routing:** React Router DOM v7 (Declarative Layout & Role Guards)
- **Styling:** Tailwind CSS (Curated Eco-Tech Obsidian & Emerald Colorway)
- **Data Layer:** Axios (JWT Interceptor, Refresh Strategy) + TanStack Query v5 (Deterministic Cache Invalidation)
- **Global State:** React Context API (Auth, Theme, Multi-Role Session)
- **Visualization:** Recharts (Telemetry, Mass-Balance Flows, Price Curves) & Lucide Icons
- **Forms & Validation:** React Hook Form + Native/Zod Validation

---

## 2. Complete Folder Tree

```text
carbonsphere-frontend/
│
├── public/
│   ├── favicon.ico
│   ├── logo-symbol.svg
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-satellite.webp
│   │   │   └── flow-diagram.svg
│   │   └── icons/
│   │       └── carbon-badge.svg
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Tabs.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   └── common/
│   │       ├── Navbar.jsx
│   │       ├── Sidebar.jsx
│   │       ├── Header.jsx
│   │       ├── MetricCard.jsx
│   │       ├── EmptyState.jsx
│   │       └── ErrorBoundary.jsx
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── pages/
│   │   │       ├── LoginPage.jsx
│   │   │       ├── SignupPage.jsx
│   │   │       └── ForgotPasswordPage.jsx
│   │   │
│   │   ├── landing/
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── CircularFlowPreview.jsx
│   │   │   │   └── FeatureGrid.jsx
│   │   │   └── pages/
│   │   │       └── LandingPage.jsx
│   │   │
│   │   ├── role-selection/
│   │   │   ├── components/RoleCard.jsx
│   │   │   └── pages/RoleSelectionPage.jsx
│   │   │
│   │   ├── supplier/
│   │   │   ├── components/
│   │   │   │   ├── PyrolysisTelemetryCard.jsx
│   │   │   │   └── BatchRegistrationModal.jsx
│   │   │   ├── hooks/useSupplierMetrics.js
│   │   │   ├── services/supplierService.js
│   │   │   └── pages/
│   │   │       ├── SupplierDashboardPage.jsx
│   │   │       ├── SupplierListingsPage.jsx
│   │   │       └── SupplierProfilePage.jsx
│   │   │
│   │   ├── buyer/
│   │   │   ├── components/
│   │   │   │   ├── OfftakePortfolioSummary.jsx
│   │   │   │   └── RequestRFQModal.jsx
│   │   │   ├── hooks/useBuyerInsetting.js
│   │   │   ├── services/buyerService.js
│   │   │   └── pages/
│   │   │       ├── BuyerDashboardPage.jsx
│   │   │       └── BuyerRequestsPage.jsx
│   │   │
│   │   ├── matching-engine/
│   │   │   ├── components/
│   │   │   │   ├── MatchScoreCard.jsx
│   │   │   │   ├── GraphView.jsx
│   │   │   │   └── CompatibilityFilter.jsx
│   │   │   ├── hooks/useMatchQuery.js
│   │   │   ├── services/matchingService.js
│   │   │   └── pages/MatchingEnginePage.jsx
│   │   │
│   │   ├── opportunity-engine/
│   │   │   ├── components/
│   │   │   │   ├── OpportunityRadar.jsx
│   │   │   │   └── ArbitrageCard.jsx
│   │   │   ├── hooks/useOpportunityStream.js
│   │   │   ├── services/opportunityService.js
│   │   │   └── pages/OpportunityEnginePage.jsx
│   │   │
│   │   ├── marketplace/
│   │   │   ├── components/
│   │   │   │   ├── CarbonListingCard.jsx
│   │   │   │   ├── OrderBookModal.jsx
│   │   │   │   └── ListingFilters.jsx
│   │   │   ├── hooks/useMarketplaceListings.js
│   │   │   ├── services/marketplaceService.js
│   │   │   └── pages/MarketplacePage.jsx
│   │   │
│   │   ├── digital-twin/
│   │   │   ├── components/
│   │   │   │   ├── CarbonFlowVisualizer.jsx
│   │   │   │   ├── NodeTelemetryPill.jsx
│   │   │   │   └── SensorFeedTimeline.jsx
│   │   │   ├── hooks/useDigitalTwinSocket.js
│   │   │   ├── services/telemetryService.js
│   │   │   └── pages/DigitalTwinPage.jsx
│   │   │
│   │   ├── sustainability/
│   │   │   ├── components/
│   │   │   │   ├── ScopeBreakdownChart.jsx
│   │   │   │   └── NetZeroRoadmapWidget.jsx
│   │   │   ├── hooks/useESGMetrics.js
│   │   │   ├── services/sustainabilityService.js
│   │   │   └── pages/SustainabilityPage.jsx
│   │   │
│   │   ├── trust-verification/
│   │   │   ├── components/
│   │   │   │   ├── CryptographicAuditCard.jsx
│   │   │   │   └── MRVCertificateModal.jsx
│   │   │   ├── hooks/useAuditProof.js
│   │   │   ├── services/verificationService.js
│   │   │   └── pages/TrustVerificationPage.jsx
│   │   │
│   │   ├── transactions/
│   │   │   ├── components/
│   │   │   │   ├── EscrowStatusBadge.jsx
│   │   │   │   └── SettlementLedgerTable.jsx
│   │   │   ├── hooks/useTransactions.js
│   │   │   ├── services/transactionService.js
│   │   │   └── pages/TransactionsPage.jsx
│   │   │
│   │   ├── notifications/
│   │   │   ├── components/NotificationItem.jsx
│   │   │   ├── hooks/useNotifications.js
│   │   │   └── pages/NotificationsPage.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── components/ParticipantApprovalRow.jsx
│   │   │   ├── hooks/useAdminMetrics.js
│   │   │   └── pages/AdminDashboardPage.jsx
│   │   │
│   │   └── settings/
│   │       ├── components/ApiKeySection.jsx
│   │       └── pages/SettingsPage.jsx
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── RoleSelectionPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── index.js
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── AuthLayout.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── RoleRoute.jsx
│   │   └── routePaths.js
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── axiosClient.js
│   │   │   └── endpoints.js
│   │   └── sockets/
│   │       └── socketClient.js
│   │
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useCarbonCalculator.js
│   │   └── index.js
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── utils/
│   │   ├── cn.js
│   │   ├── formatters.js
│   │   └── validators.js
│   │
│   ├── constants/
│   │   ├── roles.js
│   │   ├── queryKeys.js
│   │   └── carbonUnits.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 3. Directory Purposes, Contents & Best Practices

### `public/`
- **Purpose:** Static browser assets served verbatim without Vite processing.
- **What files go here:** `favicon.ico`, static brand SVGs, `robots.txt`, manifest.json.
- **Best Practices:** Do not store dynamic assets or high-res imagery directly needed in bundle code here; use `src/assets` so Vite hashes and optimizes them.

### `src/assets/`
- **Purpose:** Bundled media, custom icons, brand marks, and graphic illustrations.
- **What files go here:** SVGs, WebP images, custom font binaries.
- **Best Practices:** Group into `images/`, `icons/`, `illustrations/`. Prefer SVGs and modern formats (`.webp`).

### `src/components/ui/`
- **Purpose:** Low-level, domain-agnostic Design System primitives.
- **What files go here:** `Button.jsx`, `Card.jsx`, `Badge.jsx`, `Input.jsx`, `Modal.jsx`, `Tabs.jsx`, `Loader.jsx`.
- **Best Practices:**
  - Zero business logic or API calls.
  - Forward `ref` on inputs and interactive elements.
  - Expose composable props (`variant`, `size`, `className`, `disabled`).
  - Use `cn()` helper to merge Tailwind classes cleanly.

### `src/components/common/`
- **Purpose:** App-wide structural or repeated composite components.
- **What files go here:** `Sidebar.jsx`, `Header.jsx`, `MetricCard.jsx`, `Navbar.jsx`, `ErrorBoundary.jsx`, `EmptyState.jsx`.
- **Best Practices:**
  - Reusable across multiple pages but can leverage context (e.g. `useAuth()`, `useTheme()`).
  - Keep responsive breakpoints strictly synchronized with Tailwind theme.

### `src/features/`
- **Purpose:** Feature-sliced domain modules containing localized UI, state, hooks, and API queries.
- **What files go here:** One folder per domain concept (e.g. `digital-twin/`, `marketplace/`, `matching-engine/`). Each feature folder contains:
  - `components/` — Feature-specific sub-components.
  - `hooks/` — React Query hooks or internal feature logic.
  - `services/` — Axios API calls for this domain.
  - `pages/` — Top-level view container.
- **Best Practices:**
  - High cohesion, low coupling: Feature A should not directly import internal sub-components from Feature B without a public barrel index.
  - Keeps pull requests small and hackathon team members from stepping on each other's toes.

### `src/pages/`
- **Purpose:** Thin router integration layer.
- **What files go here:** `LandingPage.jsx`, `RoleSelectionPage.jsx`, `NotFoundPage.jsx`, `index.js`.
- **Best Practices:**
  - Should only import feature containers and wrap them with page metadata, breadcrumbs, or suspense fallbacks.

### `src/layouts/`
- **Purpose:** Persistent page shell wrappers that persist state across navigation (e.g. sidebars, headers).
- **What files go here:** `DashboardLayout.jsx`, `MainLayout.jsx`, `AuthLayout.jsx`.
- **Best Practices:**
  - Utilize React Router's `<Outlet />`.
  - Never put page-specific business data queries in layouts.

### `src/routes/`
- **Purpose:** Centralized route configuration, access control, and route constants.
- **What files go here:** `AppRoutes.jsx`, `ProtectedRoute.jsx`, `RoleRoute.jsx`, `routePaths.js`.
- **Best Practices:**
  - Never hardcode URL paths; always reference `ROUTE_PATHS.FEATURE.KEY`.
  - Nest role-protected routes inside `RoleRoute` to guard supplier vs buyer views.

### `src/services/`
- **Purpose:** Network layer and third-party integrations.
- **What files go here:** `axiosClient.js`, `endpoints.js`, WebSocket connections.
- **Best Practices:**
  - Centralize base URL, auth headers, and global interceptors (401 refresh, 500 alerting).
  - Never call `fetch()` or raw `axios` inside UI components.

### `src/hooks/`
- **Purpose:** Cross-cutting custom React hooks.
- **What files go here:** `useDebounce.js`, `useCarbonCalculator.js`, `useMediaQuery.js`.
- **Best Practices:**
  - Prefix with `use`.
  - Keep hooks pure and return clear objects/tuples.

### `src/context/`
- **Purpose:** React Context providers for global client-only UI state.
- **What files go here:** `AuthContext.jsx`, `ThemeContext.jsx`, `NotificationContext.jsx`.
- **Best Practices:**
  - Only use Context for truly global, infrequently updated state (Session, Theme, Role).
  - Use TanStack Query for server state.

### `src/utils/`
- **Purpose:** Pure helper functions.
- **What files go here:** `cn.js`, `formatters.js`, `validators.js`.
- **Best Practices:**
  - Write pure functions with zero side-effects.

### `src/constants/`
- **Purpose:** Application-wide immutable enumerations and constants.
- **What files go here:** `roles.js`, `queryKeys.js`, `carbonUnits.js`.
- **Best Practices:**
  - Object freeze or const definitions to ensure type safety.

### `src/styles/`
- **Purpose:** Global styling, Tailwind entry directives, CSS custom properties.
- **What files go here:** `globals.css`, `variables.css`.

---

## 4. Architectural Deep-Dives

### 4.1 Naming Conventions
- **Components:** PascalCase (`MetricCard.jsx`, `CarbonFlowVisualizer.jsx`).
- **Hooks:** camelCase with `use` prefix (`useCarbonCalculator.js`).
- **Utilities / Services:** camelCase (`axiosClient.js`, `formatters.js`).
- **Constants:** UPPER_SNAKE_CASE exports in camelCase files (`USER_ROLES` in `roles.js`).
- **Folders:** kebab-case for features (`matching-engine/`, `digital-twin/`), camelCase or lowercase for utils.

### 4.2 Reusable Component Strategy
- CarbonSphere UI is built following the **Compound Component Pattern** and **Tailwind CVA / cn Utility**:
  - `Button`: handles `primary`, `secondary`, `outline`, `ghost`, and `danger` variants with loading spin state.
  - `Card`: provides glassmorphism and subtle emerald/cyan hover glow.
  - `MetricCard`: standardizes real-time sensor metrics, currency, and % changes across all dashboards.

### 4.3 API Integration & Query Management
- **Axios Client:** Injects JWT Bearer token on all outgoing requests; intercepts `401 Unauthorized` responses to redirect to `/login?session_expired=true`.
- **TanStack Query (`@tanstack/react-query`):**
  - All query keys are centralized in `src/constants/queryKeys.js`.
  - Cache defaults: `staleTime: 5 min`, `refetchOnWindowFocus: false`.
  - Enables effortless optimistic UI updates when placing marketplace bids or updating sensor thresholds.

### 4.4 Multi-Role Routing Architecture
- `MainLayout` wraps public pages (`/`, `/role-selection`).
- `AuthLayout` handles `/login`, `/signup`, `/forgot-password`.
- `DashboardLayout` hosts all authenticated operational workspaces:
  - `/supplier/dashboard` — Restricted to `USER_ROLES.SUPPLIER`.
  - `/buyer/dashboard` — Restricted to `USER_ROLES.BUYER`.
  - `/admin/dashboard` — Restricted to `USER_ROLES.ADMIN`.
  - Shared modules (`/marketplace`, `/matching-engine`, `/digital-twin`, `/trust-verification`, `/sustainability`, `/transactions`, `/notifications`, `/settings`) adapt dynamically to the logged-in role.

---

## 5. Future Scalability Recommendations

1. **Code-Splitting via `React.lazy()` & Suspense:**
   As feature bundles grow, wrap feature page imports with `React.lazy(() => import('@/features/...'))` to keep initial bundle size under 150kB.
2. **WebSocket Integration for Digital Twin:**
   Use the scaffolded `services/sockets/socketClient.js` with an MQTT/WebSocket gateway for real-time sub-second IoT telemetry streaming.
3. **TypeScript Migration Path:**
   The feature-sliced architecture is 100% compatible with progressive TypeScript adoption (`tsconfig.json`, `.tsx` files).
4. **Micro-Frontends Readiness:**
   Because each feature folder is self-contained with its own components, services, and hooks, individual features (e.g. `digital-twin` or `marketplace`) can be extracted into standalone micro-frontends or shared npm packages as the startup scales.
