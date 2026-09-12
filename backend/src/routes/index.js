import { Router } from 'express';

import authRoutes from '../modules/auth/auth.routes.js';
import supplierRoutes from '../modules/supplier/supplier.routes.js';
import buyerRoutes from '../modules/buyer/buyer.routes.js';
import marketplaceRoutes from '../modules/marketplace/marketplace.routes.js';
import matchingRoutes from '../modules/matching/matching.routes.js';
import verificationRoutes from '../modules/verification/verification.routes.js';
import trustScoreRoutes from '../modules/trust-score/trust-score.routes.js';
import transactionsRoutes from '../modules/transactions/transactions.routes.js';
import notificationsRoutes from '../modules/notifications/notifications.routes.js';
import analyticsRoutes from '../modules/analytics/analytics.routes.js';
import sustainabilityRoutes from '../modules/sustainability/sustainability.routes.js';
import logisticsRoutes from '../modules/logistics/logistics.routes.js';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Register Module Routes
router.use('/auth', authRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/buyers', buyerRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/matching', matchingRoutes);
router.use('/verification', verificationRoutes);
router.use('/trust-score', trustScoreRoutes);
router.use('/transactions', transactionsRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/sustainability', sustainabilityRoutes);
router.use('/logistics', logisticsRoutes);

export default router;
