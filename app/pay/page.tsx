/**
 * Custom Payment Page (URL-Only)
 *
 * This page is not linked from the main website UI and is intended for:
 * - Direct payment links shared via email/SMS
 * - Special promotional offers
 * - Custom payment requests
 * - API integrations requiring specific payment amounts
 *
 * URL Structure: /pay?amount={AMOUNT}
 *
 * Examples:
 * - /pay?amount=25.00 → $25.00 payment
 * - /pay?amount=50.50 → $50.50 payment
 * - /pay?amount=100.00 → $100.00 payment
 *
 * Features:
 * - Amount is locked and pre-filled from URL parameter
 * - Validates minimum $1.00 requirement
 * - Secure Stripe checkout integration
 * - Professional payment confirmation UI
 * - Not accessible from main website navigation
 */

import { Suspense } from 'react';
import { CustomPaymentPage } from '@/components/custom-payment/confirmation';

export default function PayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <CustomPaymentPage />
      </Suspense>
    </div>
  );
}
