'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fonts } from '@/config/fonts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CustomPaymentForm } from './form';
import { Identity } from '@/config/identity';
import { decodePaymentToken, PaymentParams } from '@/lib/utils';

export function CustomPaymentPage() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get('token');

  const [paymentData, setPaymentData] = useState<PaymentParams | null>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isDecodingToken, setIsDecodingToken] = useState(true);

  // Decode token on component mount
  useEffect(() => {
    const decodeToken = () => {
      if (!tokenParam) {
        setIsTokenValid(false);
        setIsDecodingToken(false);
        return;
      }

      try {
        const decodedData = decodePaymentToken(tokenParam);

        if (decodedData && decodedData.amount) {
          const parsedAmount = parseFloat(decodedData.amount);
          if (parsedAmount && parsedAmount >= 1) {
            setPaymentData(decodedData);
            setIsTokenValid(true);
          } else {
            setIsTokenValid(false);
          }
        } else {
          setIsTokenValid(false);
        }
      } catch (error) {
        console.error('Token decoding failed:', error);
        setIsTokenValid(false);
      } finally {
        setIsDecodingToken(false);
      }
    };

    decodeToken();
  }, [tokenParam]);

  // Parse and validate the amount from decoded data
  const parsedAmount = paymentData ? parseFloat(paymentData.amount) : null;
  const isValidAmount = parsedAmount && parsedAmount >= 1;

  // Show loading state while decoding token
  if (isDecodingToken) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Decoding payment link...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show error for invalid token
  if (!isTokenValid || !paymentData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className={`text-2xl ${Fonts.poppins.className} text-red-600`}>
              Invalid Payment Link
            </CardTitle>
            <CardDescription>
              This payment link appears to be modified or corrupted. Please request a new link from {Identity.companyName}.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isValidAmount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className={`text-2xl ${Fonts.poppins.className} text-red-600`}>
              Invalid Amount
            </CardTitle>
            <CardDescription>
              The payment amount is invalid. Please specify a valid amount of $1.00 or more.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-4">
        {/* Header */}
        <CardHeader className="text-center">
          <CardTitle className={`text-4xl ${Fonts.poppins.className}`}>
            Confirm Payment
          </CardTitle>
        </CardHeader>

        {/* Amount Display */}
        <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                You are about to make a payment of <strong>${parsedAmount!.toFixed(2)}</strong> to {Identity.companyLegalName}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Form */}
        <CustomPaymentForm lockedAmount={parsedAmount!} customer={paymentData.customer} paymentFor={paymentData.paymentFor} />
      </div>
    </div >
  );
}
