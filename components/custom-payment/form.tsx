'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fonts } from '@/config/fonts';
import { CreditCard, Shield, Lock } from 'lucide-react';

interface CustomPaymentFormProps {
  lockedAmount: number;
  customer?: string | null;
  paymentFor?: string | null;
}

export function CustomPaymentForm({ lockedAmount, customer, paymentFor }: CustomPaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customAmount: lockedAmount * 100, // Convert to cents
          description: paymentFor || `Payment of $${lockedAmount.toFixed(2)}`,
          customer: customer,
          paymentFor: paymentFor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="border-2 border-gray-200">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Lock className="w-5 h-5 text-green-500" />
          <CardTitle className={`${Fonts.poppins.className} text-xl`}>
            Confirm Payment
          </CardTitle>
        </div>
        <CardDescription>
          Review your payment details and complete the secure checkout process.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Payment Summary */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Amount:</span>
            <span className={`text-lg font-semibold ${Fonts.poppins.className}`}>
              ${lockedAmount.toFixed(2)}
            </span>
          </div>
          {customer && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Customer:</span>
              <span className="text-gray-800 font-medium">
                {customer}
              </span>
            </div>
          )}
          {paymentFor && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Payment for:</span>
              <span className="text-gray-800 font-medium">
                {paymentFor}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Processing fee:</span>
            <span className="text-green-600">Included</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">Total:</span>
            <span className={`text-xl font-bold text-gray-900 ${Fonts.poppins.className}`}>
              ${lockedAmount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-6 text-lg font-semibold ${Fonts.poppins.className} ${
            isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-pink-200/50'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Processing Payment...
            </div>
          ) : (
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 mr-3" />
              Pay ${lockedAmount.toFixed(2)} Securely
            </div>
          )}
        </Button>

        {/* Trust Indicators */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Encrypted</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Your payment information is secure and encrypted. We never store your card details.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
